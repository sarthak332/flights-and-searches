'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Airoplanes', [
      {
        modelNumber: "N16YW",
        capacity : 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber : "N371HC",
        capacity:300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber : "N16YE",
        capacity:400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber : "N16YE",
        capacity:380,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
