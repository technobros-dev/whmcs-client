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
}

module.exports = Domains;
