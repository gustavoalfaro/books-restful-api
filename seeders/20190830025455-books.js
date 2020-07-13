'use strict';

const Books = require('../lib/models').Books

module.exports = {
  up: (queryInterface) => {
   return queryInterface.bulkInsert('Books', [
    {
      name: 'Harry Potter',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lord of the Rings',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
      return Books.destroy({ truncate : true, restartIdentity: true })
  }
};
