const Joi = require('joi')

const responseCreateRoles = Joi.object({
    error: Joi.number(),
    data: Joi.string(),
    messages:Joi.string()
})

const listReports = {
    idReport: Joi.number(),
    title: Joi.string(),
    fullName: Joi.string()
}

const responseAllReports = Joi.object({
    error: Joi.number(),
    data: Joi.array().items(listReports),
    messages:Joi.string()
})

const detailReport = {
    id: Joi.number(),
    content: Joi.string(),
    date: Joi.string(),
    hospital: Joi.string(),
    doctor: Joi.string(),
    location: Joi.string(),
    note: Joi.string(),
    title: Joi.string(),
    idReport: Joi.number(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()

}

const reponseDetailReport = Joi.object({
    error: Joi.number(),
    data:Joi.array().items(detailReport),
    messages: Joi.string()
})

const responseCreateObj = Joi.object({
    error: Joi.number(),
    data: Joi.string(),
    messages:Joi.string()
})


exports.common = {
    responseCreateRoles,
    responseAllReports,
    reponseDetailReport,
    responseCreateObj
}
