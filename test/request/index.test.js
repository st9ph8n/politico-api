const request = require('supertest');

const createIndexRoute = require('../../app');

describe('GET /', () => {
  it('returns 200', () => request(createIndexRoute)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      const result = JSON.parse(res.text);
      expect(result).to.eql({ status: 200, message: 'Welcome to Politico' });
    }));
});
