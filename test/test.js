'use strict';

var apiResponseEnvelope = require('../index');
var assert = require('chai').assert;

describe('API Response Envelope Unit Tests', function() {
    it('should wrap a response for success', function() {

        var myData = [
            'Nirvana',
            'Soundgarden',
        ];

        var responseEnvelope = apiResponseEnvelope.wrapDataForSuccess(myData);

        assert.deepEqual(
            responseEnvelope, 
            {
                'status': 'success',
                'result': [
                    'Nirvana',
                    'Soundgarden',
                ],
                'message': '',
            }
        );
    });

    it('should wrap a response for success with null values', function() {

        var myData = null;

        var responseEnvelope = apiResponseEnvelope.wrapDataForSuccess(myData);

        assert.deepEqual(
            responseEnvelope, 
            {
                'status': 'success',
                'result': [],
                'message': '',
            }
        );
    });

    it('should wrap a response for errors', function() {

        var myMessage = 'An error has occurred';

        var responseEnvelope = apiResponseEnvelope.wrapMessageForError(myMessage);

        assert.deepEqual(
            responseEnvelope, 
            {
                'status': 'error',
                'result': [],
                'message': 'An error has occurred',
            }
        );
    });

    it('should wrap a response for errors with null values', function() {

        var myMessage = null;

        var responseEnvelope = apiResponseEnvelope.wrapMessageForError(myMessage);

        assert.deepEqual(
            responseEnvelope, 
            {
                'status': 'error',
                'result': [],
                'message': '',
            }
        );
    });

});
