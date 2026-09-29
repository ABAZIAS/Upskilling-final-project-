import Joi from "joi";

 let signUpValidation = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{4,50}$/).required(),
    repassword:Joi.valid(Joi.ref("password")).required(),
    age:Joi.number().min(5).max(80).required(),
})

 let signInValidation = Joi.object({
    email:Joi.string().email().required(),
    password : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{4,50}$/).required()
})

export{
    signUpValidation,
    signInValidation
}