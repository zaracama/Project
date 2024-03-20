"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Company extends Model {
      static associate(models) {
         Company.hasMany(models.Job, { foreignKey: 'CompanyId' });
      }
   }
   Company.init(
      {
         name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: "name is required",
               },
               notEmpty: {
                  msg: "name is required",
               },
            },
         },
         companyLogo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: "companyLogo is required",
               },
               notEmpty: {
                  msg: "companyLogo is required",
               },
            },
         },
         location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: "location is required",
               },
               notEmpty: {
                  msg: "location is required",
               },
            },
         },
         email: DataTypes.STRING,
         description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: "description is required"
               },
               notEmpty: {
                  msg: "description is required"
               }
            }
         },
      },
      {
         sequelize,
         modelName: "Company",
      }
   );
   return Company;
};
