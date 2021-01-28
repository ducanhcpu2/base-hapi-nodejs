
const RolesModel = require('../models/roles')
const RoleDetailModel = require('../models/roleDetail')
const SubRoles = require('../models/subRoles')
const {sequelize} = require('../CommonBase/DBConnection/MysqlConnection')
const {response} = require('../CommonBase/RestApi/response')
getRoles = async function(request,h)
{
    // const roles = await RolesModel(sequelize).findAll();
    // console.log(roles.every(roles => roles instanceof RolesModel(sequelize))); // true
    // console.log("All users:", JSON.stringify(roles, null, 2));
    // return h.response(JSON.stringify(roles, null, 2));
    const res = await sequelize
        .query('CALL getRoleById(:id)',{replacements:{id:request.payload.id}})
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
    return (resData);
}

createRoles = async function(request,h)
{
    let recieveData = request.payload.data;
    let resCreateRole = await RolesModel(sequelize).create({roleName: recieveData[0].roleName,createdAt:"",updatedAt:""}, { individualHooks: true })
    const idRole = resCreateRole.id;
    let parseReciveData = recieveData;

    parseReciveData.forEach(function (value) {
        Object.assign(value,{idRole: idRole})
        console.log("value = ",value)

    })
    // insert nhieu ban ghi vao role detail
    let result = await RoleDetailModel(sequelize).bulkCreate(parseReciveData, { individualHooks: true }).then(() => {
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

createSubRole = async function(request,h) {

    // request.payload.data.forEach(function (value) {
    //     Object.assign(value,{createdAt: "",updatedAt: ""})
    //     console.log("value = ",value)
    //
    // })
    let result = await SubRoles(sequelize).bulkCreate(request.payload.data, { individualHooks: true }).then(() => {
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

exports.RolesHandler = {
    getRoles,
    createRoles,
    createSubRole
}
