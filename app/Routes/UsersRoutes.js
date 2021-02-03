const Joi = require('joi')
const {UsersHandler} = require("../Handlers/UsersHandler");
const {common} = require('../models/ResponseModel/common')

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
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            }
        },
    });

    server.route({
        method: 'GET',
        path: '/getting_all_users',
        options:{
            handler: async function(request,h){
                const res = await UsersHandler.gettingAllUsers(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/login',
        options:{
            handler: async function (request, h) {
                const res = await UsersHandler.login(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload :Joi.object({
                    username : Joi.string()
                        .required()
                        .description('the id for the todo item'),
                    password:Joi.string().required()
                }).label('model login'),

            },
        },
    });

    server.route({
        method: 'POST',
        path: '/register_user',
        options:{
            handler: async function (request, h) {
                const res = await UsersHandler.registerUser(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload :Joi.object({
                    email : Joi.string()
                        .required()
                        .description('email for login'),
                    fullName:Joi.string().required(),
                    phoneNumber: Joi.string().required(),
                    gender: Joi.number().required(),
                    password:Joi.string().required(),
                    idRole: Joi.number().required()
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            },
            response: {
                schema: common.responseCreateObj,
                failAction: 'log'
            }

        },

    });

    server.route({
        method: 'POST',
        path: '/logout',
        options:{
            handler: async function (request, h) {
                const res = await UsersHandler.logout(request,h)
                return res;
            },
            description: 'logout',
            notes: 'Returns 200 if success else false and detail error in data',
            tags: ['api'], // ADD THIS TAG
            validate:{
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            }
        },
    });
}
