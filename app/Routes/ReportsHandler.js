const {ReportsHandler} = require("../Handlers/ReportsHandler");
const {common} = require('../models/ResponseModel/common')
const Joi = require('joi')

module.exports = function(server) {
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
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
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
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
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
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
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
                    note: Joi.string().allow('',null),
                    idReport: Joi.number().required(),
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
        path: '/update_detail_report',
        options:{

            handler: async function (request, h) {
                const res = await ReportsHandler.updateDetailReport(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    id: Joi.number().required(),
                    title : Joi.string()
                        .required()
                        .description('Mô tả cho báo cáo'),
                    content: Joi.string().required(),
                    hospital: Joi.string().allow('',null),
                    doctor:Joi.string().allow('',null),
                    location: Joi.string(),
                    note: Joi.string().allow('',null),
                    idReport: Joi.number().required(),
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


}
