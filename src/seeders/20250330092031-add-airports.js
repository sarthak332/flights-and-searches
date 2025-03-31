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

    await queryInterface.bulkInsert("Airports",[
      {
         name : "chhatrapati shivaji maharaj international airport",
         address : null,
         cityId : 35,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name : "Hubli",
        address : null,
        cityId : 34,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      name : "Shravasti Airport",
      address : null,
      cityId : 36,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    name : "chhatrapati shivaji maharaj",
    address : null,
    cityId : 35,
    createdAt: new Date(),
    updatedAt: new Date()
 }
  ], {})

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
