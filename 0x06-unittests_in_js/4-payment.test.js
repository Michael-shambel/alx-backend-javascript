const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('call utils with type SUM and correct argument', () => {
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});