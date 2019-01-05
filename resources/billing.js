const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Billing API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Billing {
    constructor(client) {
        this._client = client;
    }

    /**
     * Accepts a quote.
     *
     * @see https://developers.whmcs.com/api-reference/acceptquote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    acceptQuote(options = {}) {
        return this._client.get(pascalCase(this.acceptQuote.name), options);
    }

    /**
     * Adds a Billable Item.
     *
     * @see https://developers.whmcs.com/api-reference/addbillableitem/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addBillableItem(options = {}) {
        return this._client.get(pascalCase(this.addBillableItem.name), options);
    }

    /**
     * Adds credit to a given client.
     *
     * @see https://developers.whmcs.com/api-reference/addcredit/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addCredit(options = {}) {
        return this._client.get(pascalCase(this.addCredit.name), options);
    }

    /**
     * Adds payment to a given invoice.
     *
     * @see https://developers.whmcs.com/api-reference/addinvoicepayment/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addInvoicePayment(options = {}) {
        return this._client.get(
            pascalCase(this.addInvoicePayment.name),
            options
        );
    }

    /**
     * Add a transaction to the system.
     *
     * @see https://developers.whmcs.com/api-reference/addtransaction/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addTransaction(options = {}) {
        return this._client.get(pascalCase(this.addTransaction.name), options);
    }

    /**
     * Applies the Client’s Credit to an invoice.
     *
     * @see https://developers.whmcs.com/api-reference/applycredit/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    applyCredit(options = {}) {
        return this._client.get(pascalCase(this.applyCredit.name), options);
    }

    /**
     * Attempt to capture a payment on an unpaid CC Invoice.
     *
     * @see https://developers.whmcs.com/api-reference/capturepayment/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    capturePayment(options = {}) {
        return this._client.get(pascalCase(this.capturePayment.name), options);
    }

    /**
     * Create an invoice using the provided parameters.
     *
     * @see https://developers.whmcs.com/api-reference/createinvoice/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    createInvoice(options = {}) {
        return this._client.get(pascalCase(this.createInvoice.name), options);
    }

    /**
     * Creates a new quote.
     *
     * @see https://developers.whmcs.com/api-reference/createquote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    createQuote(options = {}) {
        return this._client.get(pascalCase(this.createQuote.name), options);
    }

    /**
     * Deletes a quote.
     * Removes a quote from the system. This cannot be undone
     *
     * @see https://developers.whmcs.com/api-reference/deletequote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteQuote(options = {}) {
        return this._client.get(pascalCase(this.deleteQuote.name), options);
    }

    /**
     * Generate any invoices that are due to be generated.
     *
     * @see https://developers.whmcs.com/api-reference/geninvoices/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    genInvoices(options = {}) {
        return this._client.get(pascalCase(this.genInvoices.name), options);
    }

    /**
     * Obtain the Credit Log for a Client Account.
     *
     * @see https://developers.whmcs.com/api-reference/getcredits/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getCredits(options = {}) {
        return this._client.get(pascalCase(this.getCredits.name), options);
    }

    /**
     * Retrieve a specific invoice.
     *
     * @see https://developers.whmcs.com/api-reference/getinvoice/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getInvoice(options = {}) {
        return this._client.get(pascalCase(this.getInvoice.name), options);
    }

    /**
     * Retrieve a list of invoices.
     *
     * @see https://developers.whmcs.com/api-reference/getinvoices/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getInvoices(options = {}) {
        return this._client.get(pascalCase(this.getInvoices.name), options);
    }

    /**
     * Obtain quotes matching the passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getquotes/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getQuotes(options = {}) {
        return this._client.get(pascalCase(this.getQuotes.name), options);
    }

    /**
     * Obtain transactions matching the passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/gettransactions/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTransactions(options = {}) {
        return this._client.get(pascalCase(this.getTransactions.name), options);
    }

    /**
     * Send a quote to the associated client.
     *
     * @see https://developers.whmcs.com/api-reference/sendquote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    sendQuote(options = {}) {
        return this._client.get(pascalCase(this.sendQuote.name), options);
    }

    /**
     * Update an invoice using the provided parameters.
     *
     * @see https://developers.whmcs.com/api-reference/updateinvoice/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateInvoice(options = {}) {
        return this._client.get(pascalCase(this.updateInvoice.name), options);
    }

    /**
     * Updates an existing quote.
     *
     * @see https://developers.whmcs.com/api-reference/updatequote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateQuote(options = {}) {
        return this._client.get(pascalCase(this.updateQuote.name), options);
    }

    /**
     * Updates a transaction in the system.
     *
     * @see https://developers.whmcs.com/api-reference/updatetransaction/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateTransaction(options = {}) {
        return this._client.get(
            pascalCase(this.updateTransaction.name),
            options
        );
    }
}

module.exports = Billing;
