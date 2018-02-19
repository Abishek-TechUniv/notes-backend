const Models = require('../../models');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: (request, reply) => {
      Models.notes.findAll().then(notesArr => reply(notesArr));
    },
  },
  {
    method: 'PUT',
    path: '/notes',
    handler: (request, reply) => {
      const { notes } = request.payload;
      const notesArr = JSON.parse(notes);
      Models.notes.destroy({ truncate: true })
        .then(() => Models.notes.bulkCreate(notesArr))
        .then(() => reply('Successfully entered').code(201))
        .catch(() => {
          reply('Couldn\'t enter').code(400);
        });
    },
  },
];

module.exports = routes;

