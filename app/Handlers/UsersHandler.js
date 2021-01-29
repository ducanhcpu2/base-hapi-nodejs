const UsersModel = require('../models/users.js');
const JWTModel = require('../models/JWT');
const {sequelize} = require("../CommonBase/DBConnection/MysqlConnection")
const jwt = require('jsonwebtoken');
const {verifyJWT} = require('../CommonBase/Verify/VerifyJWT')
var crypto = require('crypto');

const SECRET = 'shhhh';


GetUsers = async function(request,h){
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyJWT(accessToken)
    if(resultVerify) {
        let resData = {
            error: 2,
            data: null,
            messages: response(2)
        }
        return resData;
    }

    const users = await UsersModel(sequelize).findAll({where:{"id":request.params.id}});
    let resData = {
        error: 200,
        data: users,
        messages: response(200)
    }
    return resData;




}

registerUser = async function(request,h){
    // validate
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyJWT(accessToken)
    if(resultVerify) {
        let resData = {
            error: 2,
            data: null,
            messages: response(2)
        }
        return resData;
    }

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

login = async function(request,h){

    let username = request.payload.username;
    let password = crypto.createHash('sha256').update(request.payload.password).digest('base64');

    let checkEmail = await UsersModel(sequelize).findOne({ where: { email: username,password : password} });
    let checkPhone = await UsersModel(sequelize).findOne({ where: { phoneNumber : username ,password : password} });
    if (!checkPhone && !checkEmail ) {
        let resData = {
            error: 200,
            data: 'Sai tên đăng nhập hoặc mật khẩu !',
            messages: response(200)
        }
        return resData
    }

    const payload = {
        username: username,
        password: password
    }

    const token = jwt.sign(payload, SECRET);

    let idUser = checkPhone.id ? checkPhone.id : checkEmail.id;

    const saveToken = await sequelize
        .query('CALL saveToken(:access_token,:id_user)',{replacements:{access_token: token,id_user: idUser}})
        .then(v=>{
            h.state('access_token', token, {
                maxAge: 365 * 24 * 60 * 60 * 100,
                httpOnly: true,
                // secure: true;
            })
            let resData = {
                error: 200,
                data: token,
                messages: response(200)
            }
            return resData;

        }).catch(err => {
            let resData = {
                error: 500,
                data: err,
                messages: response(500)
            }
            return resData;
        });

    return  saveToken;
}

exports.UsersHandler = {
    GetUsers,
    registerUser,
    login
};
