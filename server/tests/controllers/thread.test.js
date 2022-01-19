const { logger } = require('../../utils/logger');
const request = require('supertest');
const createApp = require('../../app');
const { expectCt } = require('helmet');

let app;

beforeAll(async () => {
  app = await createApp();
});

afterAll(async () => {});

describe('GET /db/message', () => {
  describe('when make a get request over /db/message/', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get('/db/thread/upcoming');
      expect(response.statusCode).toBe(200);
    });
  });
});

///db/message
