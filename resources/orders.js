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
     * Accepts a pending order.
     *
     * @see https://developers.whmcs.com/api-reference/acceptorder/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    acceptOrder(options = {}) {
        return this._client.get(pascalCase(this.acceptOrder.name), options);
    }

    /**
     * Adds an order to a client.
     *
     * @see https://developers.whmcs.com/api-reference/addorder/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addOrder(options = {}) {
        return this._client.get(pascalCase(this.addOrder.name), options);
    }

    /**
     * Cancel a Pending Order.
     *
     * @see https://developers.whmcs.com/api-reference/cancelorder/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    cancelOrder(options = {}) {
        return this._client.get(pascalCase(this.cancelOrder.name), options);
    }

    /**
     * Deletes a cancelled or fraud order.
     *
     * @see https://developers.whmcs.com/api-reference/deleteorder/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteOrder(options = {}) {
        return this._client.get(pascalCase(this.deleteOrder.name), options);
    }

    /**
     * Marks an order as fraudulent.
     *
     * @see https://developers.whmcs.com/api-reference/fraudorder/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    fraudOrder(options = {}) {
        return this._client.get(pascalCase(this.fraudOrder.name), options);
    }

    /**
     * Obtain orders matching the passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getorders/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getOrders(options = {}) {
        return this._client.get(pascalCase(this.getOrders.name), options);
    }

    /**
     * Retrieve Order Status and number in those statuses.
     *
     * @see https://developers.whmcs.com/api-reference/getorderstatuses/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getOrderStatuses(options = {}) {
        return this._client.get(
            pascalCase(this.getOrderStatuses.name),
            options
        );
    }

    /**
     * Retrieve configured products matching provided criteria.
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

    /**
     * Obtain promotions matching the passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getpromotions/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getPromotions(options = {}) {
        return this._client.get(pascalCase(this.getPromotions.name), options);
    }

    /**
     * Run a fraud check on a passed Order ID.
     *
     * @see https://developers.whmcs.com/api-reference/orderfraudcheck/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    orderFraudCheck(options = {}) {
        return this._client.get(pascalCase(this.orderFraudCheck.name), options);
    }

    /**
     * Sets an order, and all associated order items to Pending status.
     *
     * @see https://developers.whmcs.com/api-reference/pendingorder/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    pendingOrder(options = {}) {
        return this._client.get(pascalCase(this.pendingOrder.name), options);
    }
}

module.exports = Orders;
