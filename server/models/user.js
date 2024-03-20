"use strict";
const { Model } = require("sequelize");
const { hashPass } = require("../helpers/index");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      static associate(models) {
         User.hasMany(models.Job, { foreignKey: "AuthorId"})      }
   }
   User.init(
      {
         username: DataTypes.STRING,
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
               msg: "Email already exists",
            },
            validate: {
               notNull: {
                  msg: "Email is required",
               },
               notEmpty: {
                  msg: "Email is required",
               },
               isEmail: {
                  msg: "Invalid email format",
               },
            },
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: "password is required",
               },
               notEmpty: {
                  msg: "password is required",
               },
               len: {
                  args: [10],
                  msg: "Password must be at least 10 characters long",
               },
            },
         },
         role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Staff",
            validate: {
               notNull: {
                  msg: "role is required",
               },
               notEmpty: {
                  msg: "role is required",
               },
            },
         },
         phoneNumber: DataTypes.STRING,
         address: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "User",
      }
   );
   User.beforeCreate(async (user) => {
    user.password = await hashPass(user.password);
   });
   User.beforeUpdate(async (user) => {
    user.password = await hashPass(user.password);
   });
    return User;
};
