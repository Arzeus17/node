'use strict';

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
     await queryInterface.bulkInsert('Tasks', [{
      name: 'Bioestatística',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      name: 'Ecología',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      name: 'Pescaría',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      name: 'Oceanología',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
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
