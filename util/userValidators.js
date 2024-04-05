const joi = require("joi");


const validateUserData = (req, res, next)=>{
    const Schema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    })
    const { error, value } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Something Wrong", error: error.details[0].message } )
    }
    next();
}
const validateLoginData = (req, res, next)=>{
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    })
    const { error, value } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Something Wrong", error: error.details[0].message } )
    }
    next();
}

module.exports = {
    validateUserData,
    validateLoginData
}

