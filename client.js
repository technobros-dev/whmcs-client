const http = require('http');
const https = require('https');
const querystring = require('querystring');

const WHMCS_API_PATH = '/includes/api.php';
const HTTP_PROTOCOL = 'http:';

/**
 * An instance of the Client class provides low level HTTP wrapper methods.
 *
 * The service-specific classes delegate to an instance of Client to handle
 * the calls to the WHMCS API.
 */
class Client {
    constructor(WHMCS) {
        this._WHMCS = WHMCS;
    }

    get(action, options) {
        return this.request(action, options);
    }

    post(action, options) {
        return this.request(action, options);
    }

    put(action, options) {
        return this.request(action, options);
    }

    patch(action, options) {
        return this.request(action, options);
    }

    delete(action, options) {
        return this.request(action, options);
    }

    request(action, options) {
        let req;
        const timeout = this._WHMCS.timeout;
        const baseUrl = this._WHMCS.baseUrl();
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': this._WHMCS.userAgent()
        };

        if (baseUrl.protocol === HTTP_PROTOCOL) {
            req = http.request({
                host: baseUrl.hostname,
                port: baseUrl.port || 80,
                path: WHMCS_API_PATH,
                method: 'POST',
                headers: headers
            });
        } else {
            req = https.request({
                host: baseUrl.hostname,
                port: baseUrl.port || 443,
                path: WHMCS_API_PATH,
                method: 'POST',
                headers: headers
            });
        }

        const data = querystring.stringify({
            identifier: this._WHMCS.apiId(),
            secret: this._WHMCS.apiSecret(),
            accesskey: this._WHMCS.apiAccessKey(),
            responsetype: 'json',
            action,
            ...options
        });

        return new Promise((resolve, reject) => {
            req.setTimeout(timeout, this._timeoutHandler(req, reject));
            req.on('response', this._responseHandler(resolve, reject));
            req.on('error', this._errorHandler(req, reject));
            req.on('socket', () => {
                req.write(data);
                req.end();
            });
        });
    }

    _timeoutHandler(req, reject) {
        return () => {
            req._isAborted = true;
            req.abort();

            const err = new Error('Request timed out');
            err.statusCode = 408;
            reject(err);
        };
    }

    _responseHandler(resolve, reject) {
        return res => {
            let data = '';

            res.setEncoding('utf8');
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    if (res.statusCode >= 400 && res.statusCode < 500) {
                        const body = JSON.parse(data);
                        const err = new Error(body.message);
                        err.statusCode = res.statusCode;
                        reject(err);
                    } else if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(JSON.parse(data));
                    } else {
                        const err = new Error(
                            `Unsupported status code: ${res.statusCode}`
                        );
                        err.statusCode = res.statusCode;
                        reject(err);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        };
    }

    _errorHandler(req, reject) {
        return error => {
            if (!req._isAborted) {
                const err = new Error(
                    `An error (${
                        error.code
                    }) occurred communicating with WHMCS API`
                );
                reject(err);
            }
        };
    }
}

module.exports = Client;
