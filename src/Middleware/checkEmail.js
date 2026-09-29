import { user } from "../../db/models/user.js"

export const  checkEmail= async (req,res,next)=>{
    
    let emailExist = await user.findOne({email:req.body.email})
    if (emailExist){
        return res.status(400).json("email already exist")
    }
    
    next();

}
