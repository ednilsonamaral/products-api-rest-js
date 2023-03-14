const Joi = require('joi'); 

const middleware = (schema, property) => { 
  return (req, res, next) => {
    const { body } = req;
    const { error } = schema.validate(body);
    const valid = error == null;

    if (!valid) {
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        res.status(422).json({ error: message });
    } else {
        next();
    }
  }
}

module.exports = middleware;