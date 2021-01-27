const RolesModel = require('../models/roles')
const RoleDetailModel = require('../models/roleDetail')
const SubRoles = require('../models/subRoles')
const {sequelize} = require('../CommonBase/DBConnection/MysqlConnection')
const {response} = require('../CommonBase/RestApi/response')

gettingAllReports = async function(request,h){

    const res = await sequelize
        .query('CALL gettingAllReports()')
        .then(v=>{
            console.log(v)
            return v
        });

    const resData = {
        error: 200,
        data: res,
        messages: response(200)
    }
    return JSON.stringify(resData);
}
gettingDetailReport = async function(request,h) {
    const res = await sequelize
        .query('CALL gettingDetailReport(:id_report)',{replacements:{id_report: request.params.idReport}})
        .then(v=>{
            console.log(v)
            return v
        });

    const resData = {
        error: 200,
        data: res,
        messages: response(200)
    }
    return JSON.stringify(resData);
}
exports.ReportsHandler = {
    gettingAllReports,
    gettingDetailReport
}