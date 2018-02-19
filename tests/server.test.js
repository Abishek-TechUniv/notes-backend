const Routes = require('../src/routes');
const server = require('../src/server');

it('Should contain correct number of routes', () => {
  expect(Routes.length).toBe(server.table('localhost')[0].table.length);
});
