//const UsersModel = require('../models/Users.js');
//const models = require("../models");
//const conn = require("../CommonBase/DBConnection/MysqlConnection.js")
const db = require('../models/index')
const sequelize = require("../CommonBase/DBConnection/MysqlConnection")

module.exports = function(server) {
    server.route({
        method: 'GET',
        path: '/',
        handler: async function (request, h) {
            //console.log(" ?? = ",UsersModel)
            console.log(" db = ",db)
            // const users = await  UsersModel
            // console.log(users.every(user => user instanceof UsersModel)); // true
            // console.log("All users:", JSON.stringify(users, null, 2));
          //  conn.tryConnectToMysql()
            return 'Hello World!';
        }
    });
}



