const {
  DataTypes,Sequelize
} = require('sequelize');
const db = require('../CommonBase/DBConnection/MysqlConnection')
//const sequelize = new Sequelize(mysqlConnectionString)

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "firstname"
    },
    lastname: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lastname"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reg_date"
    }
  };
  const options = {
    tableName: "MyGuests",
    comment: "",
    indexes: []
  };
  const MyGuestsModel = sequelize.define("MyGuests_model", attributes, options);
  return MyGuestsModel;
};
