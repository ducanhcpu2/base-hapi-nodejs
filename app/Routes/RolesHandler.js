const {RolesHandler} = require("../Handlers/RolesHandler");
const {common} = require('../models/ResponseModel/common')
const Joi = require('joi')
const {getUserRes} = require('../models/ResponseModel/getUserRes')

module.exports = function(server) {
    server.route({
        method: 'GET',
        path: '/get_role_by_id',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.getRoles(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: Joi.object().required().keys({
                    id: Joi.number().required(),
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            },
            response: {
                schema: Joi.array().items(getUserRes),
                failAction: 'log'
            }

        },

    });

    server.route({
        method: 'GET',
        path: '/get_detail_role',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.getRoleDetail(request,h)
                return res;
            },
            description: 'Get todo',
            notes: 'Returns a todo item by the id passed in the path',
            tags: ['api'], // ADD THIS TAG
            validate: {
                query: Joi.object().required().keys({
                    idRole: Joi.number().required(),
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
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
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
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
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            },
            response: {
                schema: common.responseCreateRoles,
                failAction: 'log'
            }
        },

    });

    server.route({
        method: 'GET',
        path: '/getting_all_subRoles',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.gettingAllSubRoles(request,h)
                return res;
            },
            description: 'xem danh sách các sub roles đã có sẵn',
            notes: 'trả về danh sách sub role đang có trong hệ thống,user chỉ được gán những sub roles này',
            tags: ['api'], // ADD THIS TAG
            validate:{
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            }
        },
    });

    server.route({
        method: 'GET',
        path: '/getting_all_roles',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.gettingAllRoles(request,h)
                return res;
            },
            description: 'xem danh sách các roles đã có sẵn',
            notes: 'trả về danh sách role đang có trong hệ thống,user chỉ được gán những roles này',
            tags: ['api'], // ADD THIS TAG
            validate:{
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            }
        },
    });

    server.route({
        method: 'GET',
        path: '/getting_roles_page',
        options:{
            handler: async function (request, h) {
                const res = await RolesHandler.gettingRolesPage(request,h)
                return res;
            },
            description: 'xem danh sách các roles đã có sẵn co phan trang',
            notes: 'trả về danh sách role đang có trong hệ thống,user chỉ được gán những roles này',
            tags: ['api'], // ADD THIS TAG
            validate:{
                query: Joi.object().required().keys({
                    pageOffset: Joi.number().optional(),
                    pageSize: Joi.number().optional()
                }),
                headers: Joi.object({
                    'access_token': Joi.string().required()
                }).unknown()
            }
        },
    });
}

