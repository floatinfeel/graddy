'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Project extends Model{}

  Project.init({
    name: DataTypes.STRING,
    nilai: DataTypes.INTEGER
  },{
    sequelize,
    modelName: 'Project'
  })

  Project.associate = function(models) {
    // associations can be defined here
    
    Project.belongsToMany(models.Student, {through: models.StudentProject})
  };
  return Project;
};