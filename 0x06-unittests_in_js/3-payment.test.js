const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberSpy;

    beforeEach(() => {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        calculateNumberSpy.restore();
    });

    it('call utils with type SUM and correct argument', () => {
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    });
});