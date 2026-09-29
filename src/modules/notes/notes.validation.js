import Joi from "joi"


let addNoteValidation = Joi.object({
    title:Joi.string().min(8).max(30).required(),
    content:Joi.string().min(15).max(60).required()
})

let updateNoteValidation = Joi.object({
    title:Joi.string().min(8).max(30).required(),
    content:Joi.string().min(15).max(60).required(),
    id:Joi.string().hex().length(24).required()
})

export{
    addNoteValidation,
    updateNoteValidation
}