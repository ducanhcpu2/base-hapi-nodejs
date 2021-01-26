
const RolesModel = require('../models/roles')
const RoleDetailModel = require('../models/roleDetail')
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
    return JSON.stringify(resData);
}

createRoles = async function(request,h)
{



    // viet thu tuc tao role va lay ra idSubRole , idRole
    // {
    //     data:[
    //         {
    //             roleName: "abc",
    //             idSubRoles:1,
    //             RoleCode:"DELETE_USER",
    //             subRoleName:"xoa user"
    //         },
    //         {
    //             roleName: "abc",
    //             idSubRoles:1,
    //             RoleCode:"DELETE_USER",
    //             subRoleName:"xoa user"
    //         },
    //         {
    //             roleName: "abc",
    //             idSubRoles:1,
    //             RoleCode:"DELETE_USER",
    //             subRoleName:"xoa user"
    //         }
    //     ]
    // }


    let recieveData = request.payload.data;

    let resCreateRole = await RolesModel(sequelize).create({roleName: recieveData[0].RoleCode},{ individualHooks: true })
    const parseObj = JSON.parse(resCreateRole);
    const idRole = parseObj.id;

    let parseReciveData = JSON.parse(recieveData);
    parseReciveData.push({idRole: idRole})

    //let data= [{subRoleName:"Xóa user",idRole:idRole,idSubRole:2,RoleCode:"DELETE_USER",subRoleName: sub_role_name}, {subRoleName:"Xóa báo cáo",idRole:idRole,idSubRole:2,RoleCode:"DELETE_REPORT",subRoleName: sub_role_name,RoleCode: Role_Code}];

    // insert nhieu ban ghi vao role detail

    let result = await RoleDetailModel(sequelize).bulkCreate(parseReciveData, { individualHooks: true }).then(() => {
        console.log('data created');
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
        return JSON.stringify(resData);
    }
    resData = {
        error: 500,
        data: result,
        messages: response(500)
    }
    return JSON.stringify(resData);
}


module.exports = {
    getRoles,
    createRoles
}
