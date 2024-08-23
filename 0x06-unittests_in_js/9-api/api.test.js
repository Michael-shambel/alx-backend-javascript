const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
    const url = 'http://localhost:7865/';

    it('should return the correct status code', (done) => {
        request(url, (error, response, body) => {
          if (error) return done(error);
          expect(response.statusCode).to.equal(200);
          done();
        });
    });

    it('should return the correct result', (done) => {
        request(url, (error, response, body) => {
          if (error) return done(error);
          expect(body).to.equal('Welcome to the payment system');
          done();
        });
      });
});

describe('Cart page', () => {
    const baseUrl = 'http://localhost:7865/cart/';
  
    it('should return the correct status code when :id is a number', (done) => {
      request(`${baseUrl}12`, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  
    it('should return the correct result when :id is a number', (done) => {
      request(`${baseUrl}12`, (error, response, body) => {
        if (error) return done(error);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  
    it('should return 404 when :id is not a number', (done) => {
      request(`${baseUrl}hello`, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
});