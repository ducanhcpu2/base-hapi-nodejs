
const Joi = require('joi')

const getUserRes = Joi.object({
    id: Joi.number().required(),
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    // createdAt:"",
    // updatedAt:""
})


module.exports = {
    getUserRes
}
