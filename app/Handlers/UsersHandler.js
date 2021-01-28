const UsersModel = require('../models/users.js');
const {sequelize} = require("../CommonBase/DBConnection/MysqlConnection")
var crypto = require('crypto');

GetUsers = async function(request,h){
    console.log(" ?? sequelize  = ",request.params.id)
    const users = await UsersModel(sequelize).findAll({where:{"id":request.params.id}});

    console.log(users.every(user => user instanceof UsersModel(sequelize))); // true
    console.log("All users:", JSON.stringify(users, null, 2));

    return JSON.stringify(users, null, 2);
}

registerUser = async function(request,h){
    // validate
    let checkEmail = await UsersModel(sequelize).findAll({ where: { email: request.payload.email} });
    let checkPhone = await UsersModel(sequelize).findAll({ where: { phoneNumber : request.payload.phoneNumber} });
    if (checkEmail.length !== 0 || checkPhone !== 0) {
        let resData = {
            error: 200,
            data: 'email hoặc số điện thoại đã được sử dụng !',
            messages: response(200)
        }
        return resData
    }

    request.payload.password = crypto.createHash('sha256').update(request.payload.password).digest('base64');
    let result = await UsersModel(sequelize).create(request.payload, { individualHooks: true }).then(() => {
        return "OK";
    }).catch((err) => {
        console.log('failed to create data');
        console.log(err);
        return err.toString();
    });
    let resData = {
        error: 200,
        data: result,
        messages: response(200)
    }
    if (result==="OK")
    {
        return (resData);
    }
    resData = {
        error: 500,
        data: result,
        messages: response(500)
    }
    return (resData);
}

exports.UsersHandler = {
    GetUsers,
    registerUser
};
