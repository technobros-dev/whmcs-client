const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Authentication API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Authentication {
    constructor(client) {
        this._client = client;
    }

    /**
     * Create an OAuth Credential.
     *
     * @see https://developers.whmcs.com/api-reference/createoauthcredential/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    createOAuthCredential(options = {}) {
        return this._client.get(
            pascalCase(this.createOAuthCredential.name),
            options
        );
    }

    /**
     * Create a single use, client or user single sign-on access token
     *
     * @see https://developers.whmcs.com/api-reference/createssotoken/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    createSsoToken(options = {}) {
        return this._client.get(
            pascalCase(this.createSsoToken.name),
            options
        );
    }

    /**
     * Deletes an OAuth Credential Record.
     * Removes OAuth Credential record. This action cannot be undone.
     *
     * @see https://developers.whmcs.com/api-reference/deleteoauthcredential/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteOAuthCredential(options = {}) {
        return this._client.get(
            pascalCase(this.deleteOAuthCredential.name),
            options
        );
    }

    /**
     * List OAuth Credentials matching passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/listoauthcredentials/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    listOAuthCredentials(options = {}) {
        return this._client.get(
            pascalCase(this.listOAuthCredentials.name),
            options
        );
    }

    /**
     * Updates a given OAuth API Client Credential.
     *
     * @see https://developers.whmcs.com/api-reference/updateoauthcredential/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateOAuthCredential(options = {}) {
        return this._client.get(
            pascalCase(this.updateOAuthCredential.name),
            options
        );
    }

    /**
     * Validate client login credentials.
     *
     * This command can be used to validate an email address and password against a registered user in WHMCS.
     * On success, the userid and password hash will be returned which can be used to create an authenticated
     * session by setting the session key ‘uid’ to the userid and the session key ‘upw’ to the passwordhash.
     *
     * Note: if session IP validation is enabled, this API call must be executed via the local API to
     * receive a valid hash.
     *
     * @see https://developers.whmcs.com/api-reference/validatelogin/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    validateLogin(options = {}) {
        return this._client.get(pascalCase(this.validateLogin.name), options);
    }
}

module.exports = Authentication;
