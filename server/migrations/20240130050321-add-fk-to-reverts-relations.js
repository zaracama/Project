'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('Jobs', 'CompanyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Companies',
        key: 'id',
      },
    });

    await queryInterface.addColumn('Jobs', 'AuthorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('Jobs', 'CompanyId');

    await queryInterface.removeColumn('Jobs', 'AuthorId');
  },
};
