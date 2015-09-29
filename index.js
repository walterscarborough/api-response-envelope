'use strict';

module.exports = {

    /**
     * Wraps response data in an envelope.
     *
     * @param {Array} data
     * @return {Object}
     */
    wrapDataForSuccess: function(data) {

        if (data == null) {
            data = [];
        }

        return {
            'status': 'success',
            'results': data,
            'message': '',
        };
    },

    /**
     * Wraps response data in an envelope.
     *
     * @param {String} message
     * @return {Object}
     */
    wrapMessageForError: function(message) {

        if (message == null) {
            message = '';
        }

        return {
            'status': 'error',
            'results': [],
            'message': message,
        };
    },
};
