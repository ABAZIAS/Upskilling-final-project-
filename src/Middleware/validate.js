import { AppError } from "../utils/appError.js";

export const validate = (schema)=>{
    return(req,res,next)=>{
     let {error} = schema.validate({...req.body,...req.params,...req.query},{abortEarly:false});
     if(!error){
        next()
     }
     else {
        const summaryError = error.details.map( x => x.message)
         next(new AppError(summaryError,401))
     }
    }
}