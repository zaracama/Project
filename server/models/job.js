'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {

    static associate(models) {
      Job.belongsTo(models.Company, { foreignKey: 'CompanyId' });
      Job.belongsTo(models.User, { foreignKey: "AuthorId" });
    }
  }
  Job.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "title is required"
        },
        notEmpty: {
          msg: "title is required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
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
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "imgUrl is required"
        },
        notEmpty: {
          msg: "imgUrl is required"
        }
      }
    },
    jobType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "jobType is required"
        },
        notEmpty: {
          msg: "jobType is required"
        }
      },
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "CompanyId Is Required",
        },
        notEmpty: {
          msg: "CompanyId Is Required",
        },
      },
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Author Is Required",
        },
        notEmpty: {
          msg: "Author Is Required",
        },
      },
    },

  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};