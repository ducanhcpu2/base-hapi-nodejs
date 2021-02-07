
const RolesModel = require('../models/roles')
const RoleDetailModel = require('../models/roleDetail')
const SubRoles = require('../models/subRoles')
const {sequelize} = require('../CommonBase/DBConnection/MysqlConnection')
const {response} = require('../CommonBase/RestApi/response')
const {verifyCommon} = require('../CommonBase/Verify/VerifyJWT')
const { Sequelize } = require('sequelize');
const { Op } = Sequelize;



getRoles = async function(request,h)
{
    console.log("request.query.id = ",request.query.id)
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

    const res = await sequelize
        .query('CALL getRoleById(:id)',{replacements:{id:request.query.id}})
        .then(v=>{
            console.log(v)
            return v
        });
    console.log("mes  = ",response(200))

    //let counter = await  RolesModel(sequelize).count();

    let objResponse = {
        list: res,
        total_pages: 0//Math.floor(counter / pageSize) + 1
    }
    const resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return (resData);
}

getRoleDetail = async function(request,h){
    console.log("request.query.id = ",request.query.id)
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

    const res = await RoleDetailModel(sequelize).findAll({where: {idRole: request.query.idRole,status: 1}})

    //let counter = await  RolesModel(sequelize).count();

    let objResponse = {
        list: res,
        total_pages: 1//Math.floor(counter / pageSize) + 1
    }
    const resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return (resData);
}

createRoles = async function(request,h)
{
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
    let recieveData = request.payload.data;
    let resCreateRole = await RolesModel(sequelize).create({roleName: recieveData[0].roleName}, { individualHooks: true })
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

updateRoles = async function(request,h)
{
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
    let recieveData = request.payload.data;
    let resCreateRole = await RolesModel(sequelize).update({roleName: recieveData[0].roleName}, { individualHooks: true,where: {id: recieveData[0].idRole} })

    let listStatus_1 = [];
    let listStatus_0 = [];

    request.payload.data.forEach(function (value) {
        if(value.status === 1) {listStatus_1.push(value.idSubRole)}
        if(value.status === 0) { listStatus_0.push(value.idSubRole)}
    })

    let result = await RoleDetailModel(sequelize).update(
            { status: 1 }, /* set attributes' value */
            { where: { idSubRole: listStatus_1 }} /* where criteria */
    ).then(v => {
        return "OK"
    }).catch((err) => {
        console.log('failed to create data');
        console.log(err);
        return err.toString();
    });

    let result0 = await RoleDetailModel(sequelize).update(
        { status: 0 }, /* set attributes' value */
        { where: { idSubRole: listStatus_0 }} /* where criteria */
    ).then(v => {
        return "OK";
    }).catch((err) => {
        console.log('failed to create data');
        console.log(err);
        return err.toString();
    });

    let resData = {
        error: 200,
        data: result0,
        messages: response(200)
    }
    if (result0==="OK")
    {
        return (resData);
    }
    resData = {
        error: 500,
        data: result0,
        messages: response(500)
    }
    return (resData);
}

createSubRole = async function(request,h) {
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

gettingAllSubRoles = async function(request,h){
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
    const subRoles = await SubRoles(sequelize).findAll();
    let objResponse = {
        list: subRoles,
        total_pages: 0
    }
    let resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return resData;
}

gettingRolesPage = async function(request,h){

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
    const subRoles = await RolesModel(sequelize).findAll({offset: pageOffset,limit: pageSize,order:[]});
    let counter = await  RolesModel(sequelize).count();
    let objResponse = {
        list: subRoles,
        total_pages: Math.floor(counter/pageSize) + 1
    }
    let resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return resData;
}

gettingAllRoles = async function(request,h){
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
    const subRoles = await RolesModel(sequelize).findAll();

    let objResponse = {
        list: subRoles,
        total_pages: 0
    }
    let resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return resData;
}
deleteRole = async function(request,h){
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

    const res = await sequelize
        .query('CALL deleteRole(:id_role)', {replacements:{id_role: request.payload.idRole}})
        .then(v=>{
            let resData = {
                error: 200,
                data: v[0].result,
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
        });


    return res;

}
exports.RolesHandler = {
    getRoles,
    createRoles,
    createSubRole,
    gettingAllSubRoles,
    gettingAllRoles,
    gettingRolesPage,
    getRoleDetail,
    updateRoles,
    deleteRole
}
