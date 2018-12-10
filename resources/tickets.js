const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Tickets API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Tickets {
    constructor(client) {
        this._client = client;
    }

    /**
     * Get the support departments and associated ticket counts.
     *
     * @see https://developers.whmcs.com/api-reference/getsupportdepartments/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getSupportDepartments(options = {}) {
        return this._client.get(
            pascalCase(this.getSupportDepartments.name),
            options
        );
    }

    /**
     * Get the support statuses and number of tickets in each status.
     *
     * @see https://developers.whmcs.com/api-reference/getsupportstatuses/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getSupportStatuses(options = {}) {
        return this._client.get(
            pascalCase(this.getSupportStatuses.name),
            options
        );
    }

    /**
     * Obtain a specific ticket.
     *
     * @see https://developers.whmcs.com/api-reference/getticket/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTicket(options = {}) {
        return this._client.get(pascalCase(this.getTicket.name), options);
    }

    /**
     * Get ticket counts.
     *
     * @see https://developers.whmcs.com/api-reference/getticketcounts/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTicketCounts(options = {}) {
        return this._client.get(pascalCase(this.getTicketCounts.name), options);
    }

    /**
     * Obtain a specific ticket notes.
     *
     * @see https://developers.whmcs.com/api-reference/getticketnotes/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTicketNotes(options = {}) {
        return this._client.get(pascalCase(this.getTicketNotes.name), options);
    }

    /**
     * Obtain the Predefined Ticket Reply Categories.
     *
     * @see https://developers.whmcs.com/api-reference/getticketpredefinedcats/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTicketPredefinedCats(options = {}) {
        return this._client.get(
            pascalCase(this.getTicketPredefinedCats.name),
            options
        );
    }

    /**
     * Obtain the Predefined Ticket Replies.
     *
     * @see https://developers.whmcs.com/api-reference/getticketpredefinedreplies/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTicketPredefinedReplies(options = {}) {
        return this._client.get(
            pascalCase(this.getTicketPredefinedReplies.name),
            options
        );
    }

    /**
     * Obtain tickets matching the passed criteria.
     *
     * @see https://developers.whmcs.com/api-reference/gettickets/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getTickets(options = {}) {
        return this._client.get(pascalCase(this.getTickets.name), options);
    }
}

module.exports = Tickets;
