const UsersModel = require('../models/Users.js');
const {sequelize} = require("../CommonBase/DBConnection/MysqlConnection")


GetUsers = async function(request,h){
    console.log(" ?? id  = ",request.params.id)
    const users = await UsersModel(sequelize).findAll();
    console.log("users: ",users)
    console.log(users.every(user => user instanceof UsersModel(sequelize))); // true
    console.log("All users:", JSON.stringify(users, null, 2));

    return 'Hello World!';
}
module.exports = {GetUsers};
