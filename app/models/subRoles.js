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
      field: "id",
      unique: "subRoles_id_uindex"
    },
    subRoleName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "subRoleName"
    },
    RoleCode: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "RoleCode"
    }
  };
  const options = {
    tableName: "subRoles",
    comment: "",
    indexes: [],
    timestamps: false
  };
  const SubRolesModel = sequelize.define("subRoles_model", attributes, options);
  return SubRolesModel;
};