
const RolesModel = require('../models/Roles')
const {sequelize} = require('../CommonBase/DBConnection/MysqlConnection')
const {response} = require('../CommonBase/RestApi/response')
getRoles = async function(request,h)
{
    // const roles = await RolesModel(sequelize).findAll();
    // console.log(roles.every(roles => roles instanceof RolesModel(sequelize))); // true
    // console.log("All users:", JSON.stringify(roles, null, 2));
    //
    // return h.response(JSON.stringify(roles, null, 2));
    const res = await sequelize
        .query('CALL GET_LIST_USERS()')
        .then(v=>{
            console.log(v)
            return v
        });
    console.log("mes  = ",response(200))

    const resData = {
        error: 200,
        data: res,
        messages: response(200)
    }
    return JSON.stringify(resData);
}


module.exports = {
    getRoles
}
