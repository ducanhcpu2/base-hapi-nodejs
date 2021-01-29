const { Sequelize } = require('sequelize');
const connString = require('./ConnectionString')
const sequelize = new Sequelize(connString.mysqlConnectionString)

exports.tryConnectToMysql = async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
exports.sequelize = sequelize
