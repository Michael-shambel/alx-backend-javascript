const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return the correct status code', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
  });

  it('should return the correct result', async () => {
    const res = await request(app).get('/');
    expect(res.text).to.equal('Welcome to the payment system');
  });
});

describe('/available_payments endpoint', () => {
  it('should return the correct status code and result', async () => {
    const res = await request(app).get('/available_payments');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('/login endpoint', () => {
  it('should return the correct status code and result with valid username', async () => {
    const res = await request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Content-Type', 'application/json');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Welcome Betty');
  });

  it('should return 400 with missing username', async () => {
    const res = await request(app)
      .post('/login')
      .send({})
      .set('Content-Type', 'application/json');
    expect(res.status).to.equal(400);
    expect(res.text).to.equal('Bad Request');
  });
});
