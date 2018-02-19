

module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define('notes', {
    key: DataTypes.STRING,
    title: DataTypes.STRING,
    text: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return notes;
};
