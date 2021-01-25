const {UsersHandler,RolesHandler} = require('../Handlers')
const {sequelize} =require('../CommonBase/DBConnection/MysqlConnection')
const Joi = require('joi')
const RolesModel = require('../models/roles')
const {getUserRes} = require('../models/ResponseModel/getUserRes')
// const getUserRes = Joi.object({
//     id: Joi.number().required(),
//     firstname:Joi.string().required(),
//     lastname:Joi.string().required(),
//     // createdAt:"",
//     // updatedAt:""
// })

module.exports = function(server) {
    server.route({
        method: 'GET',
        path: '/getusers/{id}',
        options:{
            handler: async function(request,h){
               const res = await UsersHandler.GetUsers(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id : Joi.number()
                        .required()
                        .description('the id for the todo item'),
                })
            }
        },

    });

    server.route({
        method: 'POST',
        path: '/roles',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.getRoles(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload :Joi.object({
                    id : Joi.number()
                        .required()
                        .description('the id for the todo item'),
                    name:Joi.string().max(3)
                }).label('Sum')
            },
            response: {
                schema: Joi.array().items(getUserRes),
                failAction: 'log'
            }

        },

    });
}



