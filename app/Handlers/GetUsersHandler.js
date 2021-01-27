const UsersModel = require('../models/users.js');
const {sequelize} = require("../CommonBase/DBConnection/MysqlConnection")


GetUsers = async function(request,h){
    console.log(" ?? sequelize  = ",request.params.id)
    const users = await UsersModel(sequelize).findAll({where:{"id":request.params.id}});

    console.log(users.every(user => user instanceof UsersModel(sequelize))); // true
    console.log("All users:", JSON.stringify(users, null, 2));

    return JSON.stringify(users, null, 2);
}
exports.UsersHandler = {GetUsers};
