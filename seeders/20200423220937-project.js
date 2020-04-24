'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../file/project.json')
    let newData = data.map(elem=>{
      let obj = {
        name: elem.name,
        nilai: elem.nilai,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      return obj;
    })

    return queryInterface.bulkInsert('Projects',newData,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects',null,{});
  }
};
