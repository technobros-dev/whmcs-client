const pascalCase = require('pascal-case');

/**
 * Class providing access to the WHMCS Support API.
 *
 * @see https://developers.whmcs.com/api/api-index/
 */
class Support {
    constructor(client) {
        this._client = client;
    }

    /**
     * Adds an announcement.
     *
     * @see https://developers.whmcs.com/api-reference/addannouncement/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addAnnouncement(options = {}) {
        return this._client.get(pascalCase(this.addAnnouncement.name), options);
    }

    /**
     * Adds a Cancellation Request.
     *
     * @see https://developers.whmcs.com/api-reference/addcancelrequest/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addCancelRequest(options = {}) {
        return this._client.get(
            pascalCase(this.addCancelRequest.name),
            options
        );
    }

    /**
     * Adds a Client Note.
     *
     * @see https://developers.whmcs.com/api-reference/addclientnote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addClientNote(options = {}) {
        return this._client.get(pascalCase(this.addClientNote.name), options);
    }

    /**
     * Add a reply to a ticket by Ticket ID.
     *
     * @see https://developers.whmcs.com/api-reference/addticketreply/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    addTicketReply(options = {}) {
        return this._client.get(pascalCase(this.addTicketReply.name), options);
    }

    /**
     * Delete an announcement.
     *
     * @see https://developers.whmcs.com/api-reference/deleteannouncement/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteAnnouncement(options = {}) {
        return this._client.get(
            pascalCase(this.deleteAnnouncement.name),
            options
        );
    }

    /**
     * Deletes a ticket.
     * Removes a ticket and all replies from the system. This cannot be undone.
     *
     * @see https://developers.whmcs.com/api-reference/deleteticket/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteTicket(options = {}) {
        return this._client.get(pascalCase(this.deleteTicket.name), options);
    }

    /**
     * Deletes a ticket note.
     * Removes a ticket note from the system. This cannot be undone.
     *
     * @see https://developers.whmcs.com/api-reference/deleteticketnote/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    deleteTicketNote(options = {}) {
        return this._client.get(
            pascalCase(this.deleteTicketNote.name),
            options
        );
    }

    /**
     * Obtain an array of announcements.
     *
     * @see https://developers.whmcs.com/api-reference/getannouncements/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    getAnnouncements(options = {}) {
        return this._client.get(
            pascalCase(this.getAnnouncements.name),
            options
        );
    }

    /**
     * Open a new ticket.
     *
     * @see https://developers.whmcs.com/api-reference/openticket/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    openTicket(options = {}) {
        return this._client.get(pascalCase(this.openTicket.name), options);
    }

    /**
     * Updates an existing ticket.
     *
     * @see https://developers.whmcs.com/api-reference/updateticket/
     *
     *
     * @param {Object} [options]
     * @return {Promise}
     */
    updateTicket(options = {}) {
        return this._client.get(pascalCase(this.updateTicket.name), options);
    }
}

module.exports = Support;
