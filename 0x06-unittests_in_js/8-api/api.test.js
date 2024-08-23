const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const app = require('./api');

describe('Index page', () => {
    it('should return the correct status code', (done) => {
        request.get('http://localhost:7865/', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });
    });

    it('should return the correct result', (done) => {
        request.get('http://localhost:7865/', (error, response, body) => {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});