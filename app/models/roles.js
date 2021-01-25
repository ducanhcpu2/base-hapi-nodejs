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
      unique: "roles_id_uindex"
    },
    roleName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "roleName"
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idUser",
      references: {
        key: "id",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "roles",
    comment: "",
    indexes: [{
      name: "roles_users_id_fk",
      unique: false,
      type: "BTREE",
      fields: ["idUser"]
    }]
  };
  const RolesModel = sequelize.define("roles_model", attributes, options);
  return RolesModel;
};