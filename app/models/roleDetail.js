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
      unique: "roleDetail_id_uindex"
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
    idRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idRole",
      references: {
        key: "id",
        model: "roles_model"
      }
    },
    idSubRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idSubRole",
      references: {
        key: "id",
        model: "subRoles_model"
      }
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
    tableName: "roleDetail",
    comment: "",
    indexes: [{
      name: "roleDetail_roles_id_fk",
      unique: false,
      type: "BTREE",
      fields: ["idRole"]
    }, {
      name: "roleDetail_subRoles_id_fk",
      unique: false,
      type: "BTREE",
      fields: ["idSubRole"]
    }]
  };
  const RoleDetailModel = sequelize.define("roleDetail_model", attributes, options);
  return RoleDetailModel;
};