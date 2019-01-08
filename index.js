const url = require('url');
const Client = require('./client');
const resources = {
    authentication: require('./resources/authentication'),
    billing: require('./resources/billing'),
    clients: require('./resources/clients'),
    domains: require('./resources/domains'),
    orders: require('./resources/orders'),
    support: require('./resources/support'),
    tickets: require('./resources/tickets')
};

WHMCS.VERSION = '1.0.0';
WHMCS.DEFAULT_TIMEOUT = require('http').createServer().timeout;
WHMCS.DEFAULT_USER_AGENT = 'whmcs-node/' + WHMCS.VERSION;
WHMCS.resources = resources;

function WHMCS(attrs) {
    if (!(this instanceof WHMCS)) {
        return new WHMCS(attrs);
    }

    this._api = {
        apiId: null,
        apiSecret: null,
        apiAccessKey: null,
        baseUrl: null,
        userAgent: null
    };

    this.VERSION = WHMCS.VERSION;
    this.client = new Client(this);
    this._setupResources();
    this.setTimeout(attrs.timeout);
    this.setApiId(attrs.apiId);
    this.setApiSecret(attrs.apiSecret);
    this.setApiAccessKey(attrs.apiAccessKey);
    this.setBaseUrl(attrs.baseUrl);
    this.setUserAgent(attrs.userAgent);
}

WHMCS.prototype = {
    setTimeout: function(timeout) {
        this.timeout = timeout || WHMCS.DEFAULT_TIMEOUT;
    },

    apiId: function() {
        return this._api.apiId;
    },

    setApiId: function(apiId) {
        this._api.apiId = apiId;
    },

    apiSecret: function() {
        return this._api.apiSecret;
    },

    setApiSecret: function(apiSecret) {
        this._api.apiSecret = apiSecret;
    },

    apiAccessKey: function() {
        return this._api.apiAccessKey;
    },

    setApiAccessKey: function(apiAccessKey) {
        this._api.apiAccessKey = apiAccessKey;
    },

    baseUrl: function() {
        return this._api.baseUrl;
    },

    setBaseUrl: function(baseUrl) {
        this._api.baseUrl = url.parse(baseUrl);
    },

    userAgent: function() {
        return this._api.userAgent;
    },

    setUserAgent: function(userAgent) {
        if (!userAgent) {
            this._api.userAgent = WHMCS.DEFAULT_USER_AGENT;
        } else {
            this._api.userAgent = WHMCS.DEFAULT_USER_AGENT + ' ' + userAgent;
        }
    },

    _setupResources: function() {
        for (var name in resources) {
            this[name] = new resources[name](this.client);
        }
    }
};

module.exports = WHMCS;
