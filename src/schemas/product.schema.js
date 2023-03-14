const Joi = require('joi');

const schema = Joi.object().keys({ 
    id_category: Joi.number().required(),
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(255),
    value: Joi.number().precision(2).required(),
});

module.exports = schema;