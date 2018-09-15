const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Orders API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Orders {
    constructor(client) {
        this._client = client;
    }

    /**
     * Retrieve configured products matching provided criteria
     *
     * @see https://developers.whmcs.com/api-reference/getproducts/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getProducts(options = {}) {
        return this._client.get(pascalCase(this.getProducts.name), options);
    }
}

module.exports = Orders;
