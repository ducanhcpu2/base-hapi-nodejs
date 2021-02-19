const ReportsModel = require('../models/reports')
const ReportDetail = require('../models/reportDetail')
const {sequelize} = require('../CommonBase/DBConnection/MysqlConnection')
const {response} = require('../CommonBase/RestApi/response')
const {verifyCommon} = require('../CommonBase/Verify/VerifyJWT')
const jwt = require('jsonwebtoken');
const SECRET = 'shhhh';

gettingAllReports = async function(request,h){
    console.log("ok = ")

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

    //check role
   //  const decoded = jwt.verify(accessToken, SECRET);
   //  let checker = false;
   //  decoded.role.forEach(function (value) {
   //     if(value.RoleCode === "VIEW_ALL_REPORTS"){
   //         checker = true;
   //         return;
   //     }
   //     console.log("value = ",value)
   // })
   //
   //  if(!checker) {
   //      const resData = {
   //          error: 4,
   //          data: null,
   //          messages: response(4)
   //      }
   //      return resData;
   //  }

    let pageOffset = request.query.pageOffset;
    let pageSize = request.query.pageSize;

    const res = await sequelize
        .query('CALL gettingAllReports(:pageOffset,:pageSize)', {replacements:{pageOffset: pageOffset-1,pageSize: pageSize}})
        .then(v=>{
            console.log(v)
            return v
        });

    let counter = await  ReportsModel(sequelize).count();

    let objResponse = {
        list: res,
        total_pages: Math.floor(counter / pageSize) + 1
    }

    const resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return resData;
}
gettingReportById = async function(request,h) {
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
    const result = await ReportsModel(sequelize).findAll({where:{"idUser":request.params.idUser}}).then(v=>{

        let resData = {
            error: 200,
            data: v,
            messages: response(200)
        }

        return (resData);

    }).catch(err => {
        let resData = {
            error: 500,
            data: err,
            messages: response(500)
        }
        return (resData);
    });
    return result;
}
gettingDetailReport = async function(request,h) {
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
    let pageOffset = request.query.pageOffset;
    let pageSize = request.query.pageSize;
    const res = await sequelize
        .query('CALL gettingDetailReport(:id_report,:pageOffset,:pageSize)',{replacements:{id_report: request.params.idReport,pageOffset: pageOffset-1,pageSize: pageSize}})
        .then(v=>{
            console.log(v)
            return v
        });

    let counter = await  ReportDetail(sequelize).count({where: {idReport: request.params.idReport}});

    let objResponse = {
        list: res,
        total_pages: Math.floor(counter / pageSize) + 1
    }

    const resData = {
        error: 200,
        data: objResponse,
        messages: response(200)
    }
    return (resData);
}
createReport = async function(request,h){
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
    let result = await ReportsModel(sequelize).create(request.payload, { individualHooks: true }).then(() => {
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
createDetailReport = async function(request,h) {
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
    let result = await ReportDetail(sequelize).create(request.payload, { individualHooks: true }).then(() => {
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

updateReport = async function(request,h) {
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
    let idReport = request.payload.idReport;
    let result = await ReportsModel(sequelize).update(request.payload, { individualHooks: true ,where: { id: idReport }},).then(() => {
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

updateDetailReport = async function(request,h) {
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
    let id = request.payload.id;
    let result = await ReportDetail(sequelize).update(request.payload, { individualHooks: true ,where: { id: id }},).then(() => {
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
exports.ReportsHandler = {
    gettingAllReports,
    gettingDetailReport,
    createReport,
    createDetailReport,
    updateReport,
    gettingReportById,
    updateDetailReport
}
