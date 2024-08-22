const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
        .then((response) => {
            expect(response).to.have.property('data', 'Successful response from the API');
            done();
        })
        .catch((error) => done(error));
    });

    it('should do nothing when success is false', (done) => {
        getPaymentTokenFromAPI(false)
        .then((response) => {
            expect(response).to.be.undefined;
            done();
        })
        .catch((error) => done(error));
    });
});