

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('notes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    key: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    text: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('notes'),
};
