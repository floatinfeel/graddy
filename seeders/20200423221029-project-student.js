'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../file/prostu.json')
    let newData = data.map(elem=>{
      let obj = {
        StudentId: elem.StudentId,
        ProjectId: elem.ProjectId,
        BuddyId: elem.BuddyId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      return obj;
    })

    return queryInterface.bulkInsert('StudentProjects',newData,{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkInsert('StudentProjects',null,{});

  }
};
