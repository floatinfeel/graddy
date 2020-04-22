'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class StudentProject extends Model{}

  StudentProject.init({
    StudentId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER,
    BuddyId: DataTypes.INTEGER
  },{
    sequelize,
    modelName: 'StudentProject'
  })

  StudentProject.associate = function(models) {
    // associations can be defined here
    StudentProject.belongsTo(models.Student, { foreignKey: "StudentId", targetKey: "id" });
    StudentProject.belongsTo(models.Project, { foreignKey: "ProjectId", targetKey: "id" });
    StudentProject.belongsTo(models.Budd, { foreignKey: "BuddyId", targetKey: "id" });
  };
  return StudentProject;
};