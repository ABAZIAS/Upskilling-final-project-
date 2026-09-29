import jwt from "jsonwebtoken"

export async function verifyToken(req,res,next){
    const {token} = req.headers
    jwt.verify(token,"mohamedabaza",async(error,decoded)=>{
        if(error){
            return res.status(500).json(error.message)
        }
        else{
            console.log(decoded);
            req.userId = decoded.id
            next()
        }
    })
}