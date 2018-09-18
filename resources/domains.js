const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Domains API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Domains {
    constructor(client) {
        this._client = client;
    }

    /**
     * Obtains the current lock status of the domain.
     *
     * @see https://developers.whmcs.com/api-reference/domaingetlockingstatus/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainGetLockingStatus(options = {}) {
        return this._client.get(
            pascalCase(this.domainGetLockingStatus.name),
            options
        );
    }

    /**
     * Obtains the current nameservers for the domain.
     *
     * @see https://developers.whmcs.com/api-reference/domaingetnameservers/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainGetNameservers(options = {}) {
        return this._client.get(
            pascalCase(this.domainGetNameservers.name),
            options
        );
    }

    /**
     * Obtains the current whois information for the domain.
     *
     * @see https://developers.whmcs.com/api-reference/domaingetwhoisinfo/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainGetWhoisInfo(options = {}) {
        return this._client.get(
            pascalCase(this.domainGetWhoisInfo.name),
            options
        );
    }

    /**
     * Sends the Register command to the registrar for the domain.
     *
     * @see https://developers.whmcs.com/api-reference/domainregister/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainRegister(options = {}) {
        return this._client.get(pascalCase(this.domainRegister.name), options);
    }

    /**
     * Sends the Release command to the registrar for the domain to a new tag
     *
     * @see https://developers.whmcs.com/api-reference/domainrelease/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainRelease(options = {}) {
        return this._client.get(pascalCase(this.domainRelease.name), options);
    }

    /**
     * Sends the Renew command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domainrenew/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainRenew(options = {}) {
        return this._client.get(pascalCase(this.domainRenew.name), options);
    }

    /**
     * Sends the Request EPP command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domainrequestepp/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainRequestEPP(options = {}) {
        return this._client.get(
            pascalCase(this.domainRequestEPP.name),
            options
        );
    }

    /**
     * Sends the Toggle ID Protect command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domaintoggleidprotect/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainToggleIdProtect(options = {}) {
        return this._client.get(
            pascalCase(this.domainToggleIdProtect.name),
            options
        );
    }

    /**
     * Sends the Transfer command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domaintransfer/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainTransfer(options = {}) {
        return this._client.get(pascalCase(this.domainTransfer.name), options);
    }

    /**
     * Sends the Update Lock command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domainupdatelockingstatus/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainUpdateLockingStatus(options = {}) {
        return this._client.get(
            pascalCase(this.domainUpdateLockingStatus.name),
            options
        );
    }

    /**
     * Sends the Save Nameservers command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domainupdatenameservers/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainUpdateNameservers(options = {}) {
        return this._client.get(
            pascalCase(this.domainUpdateNameservers.name),
            options
        );
    }

    /**
     * Sends the Save Whois command to the registrar for the domain
     *
     * @see https://developers.whmcs.com/api-reference/domainupdatewhoisinfo/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainUpdateWhoisInfo(options = {}) {
        return this._client.get(
            pascalCase(this.domainUpdateWhoisInfo.name),
            options
        );
    }

    /**
     * Retrieve domain whois information.
     *
     * @see https://developers.whmcs.com/api-reference/domainwhois/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    domainWhois(options = {}) {
        return this._client.get(pascalCase(this.domainWhois.name), options);
    }

    /**
     * Retrieve configured products matching provided criteria
     *
     * @see https://developers.whmcs.com/api-reference/gettldpricing/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTLDPricing(options = {}) {
        return this._client.get(pascalCase(this.getTLDPricing.name), options);
    }

    /**
     * Updates a Client Domain
     *
     * @see https://developers.whmcs.com/api-reference/updateclientdomain/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateClientDomain(options = {}) {
        return this._client.get(
            pascalCase(this.updateClientDomain.name),
            options
        );
    }
}

module.exports = Domains;
