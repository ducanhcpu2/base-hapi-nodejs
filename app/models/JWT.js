const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
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
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token"
    }
  };
  const options = {
    tableName: "JWT",
    comment: "",
    indexes: [],
      timestamps:false
  };
  const JwtModel = sequelize.define("JWT_model", attributes, options);
  return JwtModel;
};