const {common} = require('../models/ResponseModel/common')
const Joi = require('joi')
const {RolesHandler} = require("../Handlers/RolesHandler");
const {UsersHandler} = require("../Handlers/GetUsersHandler");
const {ReportsHandler} = require("../Handlers/ReportsHandler");
const {getUserRes} = require('../models/ResponseModel/getUserRes')

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

    server.route({
        method: 'POST',
        path: '/creat_roles',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.createRoles(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload :Joi.object({
                    data:Joi.array().items(
                        {
                            roleName: Joi.string().required(),
                            idSubRole: Joi.number().required(),
                            RoleCode: Joi.string().required(),
                            subRoleName: Joi.string().required()
                        }
                    )
                })
            },
            response: {
                schema: common.responseCreateRoles,
                failAction: 'log'
            }
        },

    });

    server.route({
        method: 'POST',
        path: '/create_sub_roles',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.createSubRole(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload :Joi.object({
                    data:Joi.array().items(
                        {
                            subRoleName: Joi.string().required(),
                            RoleCode: Joi.string().required(),
                        }
                    )
                })
            },
            response: {
                schema: common.responseCreateRoles,
                failAction: 'log'
            }
        },

    });

    server.route({
        method: 'GET',
        path: '/getting_all_reports',
        options:{
            handler: async function (request, h) {
                const res = await ReportsHandler.gettingAllReports(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            response: {
                schema: common.responseAllReports,
                failAction: 'log'
            }
        },

    });

    server.route({
        method: 'GET',
        path: '/getting_detail_reports/{idReport}',
        options:{
            handler: async function (request, h) {
                const res = await ReportsHandler.gettingDetailReport(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    idReport : Joi.number()
                        .required()
                        .description('the id for the todo item'),
                })
            },
            response: {
                schema: common.reponseDetailReport,
                failAction: 'log'
            }
        },

    });
}



