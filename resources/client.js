const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Client API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Client {
    constructor(client) {
        this._client = client;
    }

    /**
     * Adds a client.
     *
     * @see https://developers.whmcs.com/api-reference/addclient/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addClient(options = {}) {
        return this._client.get(pascalCase(this.addClient.name), options);
    }

    /**
     * Adds a contact to a client account.
     *
     * @see https://developers.whmcs.com/api-reference/addcontact/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addContact(options = {}) {
        return this._client.get(pascalCase(this.addContact.name), options);
    }

    /**
     * Close a Client.
     *
     * @see https://developers.whmcs.com/api-reference/closeclient/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    closeClient(options = {}) {
        return this._client.get(pascalCase(this.closeClient.name), options);
    }

    /**
     * Deletes a client.
     *
     * @see https://developers.whmcs.com/api-reference/deleteclient/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteClient(options = {}) {
        return this._client.get(pascalCase(this.deleteClient.name), options);
    }

    /**
     * Deletes a contact.
     *
     * @see https://developers.whmcs.com/api-reference/deletecontact/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteContact(options = {}) {
        return this._client.get(pascalCase(this.deleteContact.name), options);
    }

    /**
     * Obtain an array of cancellation requests.
     *
     * @see https://developers.whmcs.com/api-reference/getcancelledpackages/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getCancelledPackages(options = {}) {
        return this._client.get(
            pascalCase(this.getCancelledPackages.name),
            options
        );
    }

    /**
     * Obtain an array of client groups.
     *
     * @see https://developers.whmcs.com/api-reference/getclientgroups/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClientGroups(options = {}) {
        return this._client.get(pascalCase(this.getClientGroups.name), options);
    }

    /**
     * Obtain the encrypted client password.
     *
     * @see https://developers.whmcs.com/api-reference/getclientpassword/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClientPassword(options = {}) {
        return this._client.get(
            pascalCase(this.getClientPassword.name),
            options
        );
    }

    /**
     * Obtain the Clients that match passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getclients/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClients(options = {}) {
        return this._client.get(pascalCase(this.getClients.name), options);
    }

    /**
     * Obtain the Clients Product Addons that match passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getclientsaddons/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClientsAddons(options = {}) {
        return this._client.get(
            pascalCase(this.getClientsAddons.name),
            options
        );
    }

    /**
     * Obtain the Clients Details for a specific client.
     *
     * @see https://developers.whmcs.com/api-reference/getclientsdetails/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClientsDetails(options = {}) {
        return this._client.get(
            pascalCase(this.getClientsDetails.name),
            options
        );
    }

    /**
     * Obtain a list of Client Purchased Domains matching the provided criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getclientsdomains/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClientsDomains(options = {}) {
        return this._client.get(
            pascalCase(this.getClientsDomains.name),
            options
        );
    }

    /**
     * Obtain a list of Client Purchased Products matching the provided criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getclientsproducts/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getClientsProducts(options = {}) {
        return this._client.get(
            pascalCase(this.getClientsProducts.name),
            options
        );
    }

    /**
     * Obtain the Client Contacts that match passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/getcontacts/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getContacts(options = {}) {
        return this._client.get(pascalCase(this.getContacts.name), options);
    }

    /**
     * Obtain a list of emails sent to a specific Client ID.
     *
     * @see https://developers.whmcs.com/api-reference/getemails/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getEmails(options = {}) {
        return this._client.get(pascalCase(this.getEmails.name), options);
    }

    /**
     * Starts the password reset process for a client or contact.
     *
     * @see https://developers.whmcs.com/api-reference/resetpassword/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    resetPassword(options = {}) {
        return this._client.get(pascalCase(this.resetPassword.name), options);
    }

    /**
     * Updates a client with the passed parameters.
     *
     * @see https://developers.whmcs.com/api-reference/updateclient/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateClient(options = {}) {
        return this._client.get(pascalCase(this.updateClient.name), options);
    }

    /**
     * Updates a contact with the passed parameters.
     *
     * @see https://developers.whmcs.com/api-reference/updatecontact/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateContact(options = {}) {
        return this._client.get(pascalCase(this.updateContact.name), options);
    }
}

module.exports = Client;
