const UsersModel = require('../models/users.js');
const JWTModel = require('../models/JWT');
const RoleDetail = require('../models/roleDetail')
const {sequelize} = require("../CommonBase/DBConnection/MysqlConnection")
const jwt = require('jsonwebtoken');
const {verifyCommon} = require('../CommonBase/Verify/VerifyJWT')


var crypto = require('crypto');


GetUsers = async function(request,h){
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyCommon.verifyJWT(accessToken)
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

gettingAllUsers = async function(request,h){
    let pageOffset = request.query.pageOffset;
    let pageSize = request.query.pageSize;
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyCommon.verifyJWT(accessToken)
    if(resultVerify) {
        let resData = {
            error: 2,
            data: null,
            messages: response(2)
        }
        return resData;
    }

    // const users = await UsersModel(sequelize).findAll({offset: pageOffset-1,limit: pageSize,order:[],attributes: ['id', 'fullName','gender','email','phoneNumber','createdAt','updatedAt']});
    const users = await sequelize
        .query('CALL getAllUsers(:offset,:limit_number)',{replacements: {offset : pageOffset, limit_number: pageSize }})
        .then(v => {

            return v;
        })
    let counter = await UsersModel(sequelize).count();

    let objResponse = {
        list: users,
        total_pages: Math.floor(counter/pageSize) + 1
    }
    let resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return resData;

}

gettingUserByOption = async function(request,h){

    let option = request.query.option;
    let param =  request.query.param;
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyCommon.verifyJWT(accessToken)

    if(resultVerify) {
        let resData = {
            error: 2,
            data: null,
            messages: response(2)
        }
        return resData;
    }

    let search = await sequelize
        .query('CALL searchUser(:opt,:param)', {replacements:{opt: option,param: param}})
        .then(v=>{
            console.log(v)
            let resData = {
                error: 200,
                data: v,
                messages: response(200)
            }
            return resData
        }).catch(err => {
            let resData = {
                error: 200,
                data: err,
                messages: response(200)
            }
            return resData;
        });
    return search;

}
registerUser = async function(request,h){
    // validate
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyCommon.verifyJWT(accessToken)
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
    if (checkEmail.length !== 0 || checkPhone.length !== 0) {
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

    let checkEmail = await UsersModel(sequelize).findAll({ where: { email: username,password : password} });
    let checkPhone = await UsersModel(sequelize).findAll({ where: { phoneNumber : username ,password : password} });
    if (checkPhone.length === 0 && checkEmail.length ===0 ) {
        let resData = {
            error: 3,
            data: null,
            messages: response(3)
        }
        return resData
    }

    let idUser ;
    if (checkEmail.length === 0) {
        idUser = checkPhone[0].id;
    }else{
        idUser = checkEmail[0].id;
    }
    console.log("id_user = ",idUser)
    let listRoles = await sequelize
        .query('CALL getListTolesByIdUser(:id_user)', {replacements:{id_user: idUser}})
        .then(v=>{
            console.log(v)
            return v
        });
    console.log("listRoles = ",listRoles)
    const payload = {
        username: username,
        role: listRoles
    }

    const token = jwt.sign(payload, verifyCommon.SECRET);




    const saveToken = await sequelize
        .query('CALL saveToken(:access_token,:id_user)',{replacements:{access_token: token,id_user: idUser}})
        .then(v=>{
            console.log(v)
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
            console.log("err = ",err)
            let resData = {
                error: 500,
                data: err,
                messages: response(500)
            }
            return resData;
        });

    return  saveToken;
}

logout = async function(request,h){
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyCommon.verifyJWT(accessToken)
    if(resultVerify) {
        let resData = {
            error: 2,
            data: null,
            messages: response(2)
        }
        return resData;
    }

    let result = await JWTModel(sequelize).destroy({ where: { token: accessToken} })
        .then(v=>{
            let resData = {
                error: 200,
                data: "OK",
                messages: response(200)
            }
            return resData;
        }).catch(err =>{
            let resData = {
                error: 500,
                data: err,
                messages: response(500)
            }
            return resData;
        })

    return result;

}

updateUser = async function(request,h){
    let accessToken = request.headers.access_token;
    let resultVerify = await verifyCommon.verifyJWT(accessToken)
    if(resultVerify) {
        let resData = {
            error: 2,
            data: null,
            messages: response(2)
        }
        return resData;
    }

    let result = await UsersModel(sequelize).update(request.payload,{ individualHooks: true,where: {id: request.payload.id} })
        .then(v=>{
            let resData = {
                error: 200,
                data: "sửa thành công",
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
        })

    return result;
}



exports.UsersHandler = {
    GetUsers,
    registerUser,
    login,
    logout,
    gettingAllUsers,
    gettingUserByOption,
    updateUser
};
