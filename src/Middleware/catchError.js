export function catchError(callback){
    return (req,res,next)=>{
        callback(req,res).catch((error)=>{  // 1. Starts signUp in background
        next(error);                               // 2. SLEEPS. Only runs IF signUp throws an err
        /*
        const code = error.statusCode || 500
        return res.status(code).send({message:error.message,stack:error.stack})
        */
        })
    }
}

 
