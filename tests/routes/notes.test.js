const server = require('../../src/server');

describe('Testing the routes', () => {
  it('Should return 200 status code for sucessful GET request', (done) => {
    const request = {
      method: 'GET',
      url: '/notes',
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });


  it('Should return 201 status code for sucessful PUT request', (done) => {
    const request = {
      method: 'PUT',
      url: '/notes',
      payload: JSON.stringify({
        notes:
        '[{ "title": "Abishek", "text": "Aditya", "key": "123" }]',
      }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });

  it('Should return failure code for PUT request with invalid payload', (done) => {
    const request = {
      method: 'PUT',
      url: '/notes',
      payload: 'notes',
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
});
