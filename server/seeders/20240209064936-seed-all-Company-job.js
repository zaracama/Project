'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   let data1 = require(`../data/Company.json`).map(el => {
    el.createdAt = el.updatedAt = new Date()
    return el
   })
   
   await queryInterface.bulkInsert("Users", data)
   let data2 = require(`../data/Job.json`).map(el => {
    el.createdAt = el.updatedAt = new Date()
    return el
   })

   
   await queryInterface.bulkInsert("Company", data1)
   
   await queryInterface.bulkInsert("Job", data2)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Company")

    await queryInterface.bulkDelete("Job")
  }
};