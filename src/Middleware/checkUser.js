import { user } from "../../db/models/user.js"

export const checkUser = async (req,res,next)=>{
    const exist = await user.findById(req.userId)
    if(!exist){
        res.status(404).json("This user is no longer registered")
    }
    else{
        next()
    }

}