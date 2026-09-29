export function globalError(error,req,res,next){
    const code = error.statusCode || 500
    return res.status(code).send({message:error.message,stack:error.stack})
}