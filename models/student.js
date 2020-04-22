'use strict';
module.exports = (sequelize, DataTypes) => {
  class Student extends Model{}

  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    BuddyId: DataTypes.INTEGER
  },{
    sequelize,
    modelName: 'Student'
  })

  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.Budd)
    Student.belongsToMany(models.Project, {through: models.StudentProject})
  };
  return Student;
};