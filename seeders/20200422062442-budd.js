'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../file/budd.json')
    let newData = data.map(elem=>{
      let obj = {
        name: elem.name,
        email: elem.email,
        phone_number: elem.phone_number,
        username: elem.username,
        password: elem.password,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      return obj;
    })

    return queryInterface.bulkInsert('Budds',newData,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Budds',null,{});
  }
};
