'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../file/student.json')
    let newData = data.map(elem=>{
      let obj = {
        name: elem.name,
        email: elem.email,
        phone_number: elem.phone_number,
        username: elem.username,
        password: elem.password,
        BuddyId: parseInt(elem.BuddyId),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      return obj;
    })

    return queryInterface.bulkInsert('Students',newData,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',null,{});
  }
};
