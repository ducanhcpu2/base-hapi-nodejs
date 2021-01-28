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
            validate: {
                query: Joi.object().required().keys({
                    pageOffset: Joi.number().optional(),
                    pageSize: Joi.number().optional()
                })
            },
            response: {
                schema: common.responseAllReports,
                failAction: 'log'
            }
        },

    });

    server.route({
        method: 'GET',
        path: '/getting_reports_by_id/{idUser}',
        options:{
            handler: async function (request, h) {
                const res = await ReportsHandler.gettingReportById(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    idUser: Joi.number()
                        .required()
                        .description('the id for the todo item'),
                }),
            },
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
                }),
                query: Joi.object().required().keys({
                    pageOffset: Joi.number().optional(),
                    pageSize: Joi.number().optional()
                })
            },
            response: {
                schema: common.reponseDetailReport,
                failAction: 'log'
            }
        },

    });

    server.route({
        method: 'POST',
        path: '/create_report',
        options:{
            handler: async function (request, h) {
                const res = await ReportsHandler.createReport(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    title : Joi.string()
                        .required()
                        .description('Mô tả cho báo cáo'),
                    idUser: Joi.number().required().description('id của user được gán báo cáo nhiệm vụ ')
                })
            },
            response: {
                schema: common.responseCreateObj,
                failAction: 'log'
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/create_detail_report',
        options:{
            handler: async function (request, h) {
                const res = await ReportsHandler.createDetailReport(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    title : Joi.string()
                        .required()
                        .description('Mô tả cho báo cáo'),
                    content: Joi.string().required(),
                    hospital: Joi.string().allow('',null),
                    doctor:Joi.string().allow('',null),
                    location: Joi.string(),
                    note: Joi.string(),
                    idReport: Joi.number().required(),
                })
            },
            response: {
                schema: common.responseCreateObj,
                failAction: 'log'
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/update_report',
        options:{
            handler: async function (request, h) {
                const res = await ReportsHandler.updateReport(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    title : Joi.string()
                        .required()
                        .description('Mô tả cho báo cáo'),
                    idUser: Joi.number().required(),
                    idReport: Joi.number().required()
                })
            },
            response: {
                schema: common.responseCreateObj,
                failAction: 'log'
            }
        },
    });
}



