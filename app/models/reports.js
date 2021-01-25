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
      unique: "reports_id_uindex"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title"
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
    tableName: "reports",
    comment: "",
    indexes: [{
      name: "Reports_users_id_fk",
      unique: false,
      type: "BTREE",
      fields: ["idUser"]
    }]
  };
  const ReportsModel = sequelize.define("reports_model", attributes, options);
  return ReportsModel;
};