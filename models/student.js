'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Student extends Model{}

  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    BuddyId: DataTypes.INTEGER
  },{
    sequelize,
    modelName: 'Student'
  })

  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Project, {through: models.StudentProject})
  };
  return Student;
};