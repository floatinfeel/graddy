'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Budd extends Model {}

  Budd.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize,
    modelName: 'Budd'
  })

  Budd.associate = function(models) {
    // associations can be defined here
    Budd.hasMany(models.Student, { foreignKey : 'BuddyId' })
  };
  return Budd;
};