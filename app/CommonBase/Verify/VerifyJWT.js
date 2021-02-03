const jwt = require('jsonwebtoken');
const JWTModel = require('../../models/JWT');
const {sequelize} = require("../../CommonBase/DBConnection/MysqlConnection")
const SECRET = 'shhhh';


async function verifyJWT(accessToken) {
    try{
        const token = await JWTModel(sequelize).findOne({where:{"token":accessToken}});
        //console.log("token = ",token)
        if(!token) {
            return true;
        }
        return false;
    }catch (e) {
        console.log("e = ",e)
        return false;
    }
}
exports.verifyCommon = {verifyJWT,SECRET};