'use strict';

const fs = require('fs'),
    path = require('path');
// const config = require('config');
const Sequelize = require('sequelize');
const connString = require('../CommonBase/DBConnection/ConnectionString')
const sequelize = new Sequelize(connString.mysqlConnectionString);

const db = {};

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    // var model = sequelize['import'](path.join(__dirname, file));

    var model = require(path.join(__dirname, file))(sequelize,
        Sequelize);

    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
