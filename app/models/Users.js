const {
  DataTypes
} = require('sequelize');
// module.exports =  sequelize => {
//   const attributes = {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: true,
//       autoIncrement: true,
//       comment: null,
//       field: "id"
//     },
//     firstName: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "firstName"
//     },
//     lastName: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "lastName"
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "createdAt"
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "updatedAt"
//     }
//   };
//   const options = {
//     tableName: "Users",
//     comment: "",
//     indexes: []
//   };
//
//   const UsersModel = sequelize.define("Users_model", attributes, options);
// console.log(sequelize.models.Users_model.findAll())
//   return UsersModel;
// };
const {sequelize}= require('../CommonBase/DBConnection/MysqlConnection')
const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    autoIncrement: true,
    comment: null,
    field: "id"
  },
  firstName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "firstName"
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "lastName"
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "createdAt"
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
    field: "updatedAt"
  }
};
const options = {
  tableName: "Users",
  comment: "",
  indexes: []
};
module.exports = sequelize.define("Users_model", attributes, options);



// 'use strict';
//
// module.exports = function (sequelize, DataTypes) {
//   let mod_users = sequelize.define('Users', {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: true,
//       autoIncrement: true,
//       comment: null,
//       field: "id"
//     },
//     firstName: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "firstName"
//     },
//     lastName: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "lastName"
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "createdAt"
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: null,
//       primaryKey: false,
//       autoIncrement: false,
//       comment: null,
//       field: "updatedAt"
//     }
//   }, {
//     classMethods: {
//       associate: function (models) {
//       }
//     }
//   });
//
//   return mod_users;
// };
