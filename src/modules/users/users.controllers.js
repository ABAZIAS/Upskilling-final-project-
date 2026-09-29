import { user } from "../../../db/models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendMail } from "../../emails/sendEmail.js"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"

const findUser = async(req,res)=>{
    const User = await user.findById(req.params.id,'name email')
    if(!User){
        return res.status(400).json("user doesnt exist")
    }
    res.json(User)
}
const signUP = catchError(async(req,res)=>{
    
    req.body.password = bcrypt.hashSync(req.body.password , 10)
    const User = await user.insertMany(req.body)
    sendMail({name:req.body.name,email:req.body.email})
    User[0].password = undefined 
    res.json({
        message : "signed up",
        User
    })

})

const confirmEmail = catchError((req,res)=> {
        jwt.verify(req.params.token,"email(secretkey)",async (error,decoded)=>{
            if(error){
                throw new AppError("Error Generating token",500)
            }
            const User= await user.findOneAndUpdate({email:decoded.email},{confirmEmail:true},{new:true})
            res.json({message:"User verified",User})
        })
})

const signIN = catchError( async(req,res)=>{
    const User = await user.findOne({email:req.body.email})
    
    if(User && bcrypt.compareSync(req.body.password,User.password)){
        jwt.sign({id:User.id,name:User.name,email:User.email},"mohamedabaza",async(error,token)=>{
        if(error){
            throw new AppError(error.message,400)
        }
        else {
            return res.json({message:"signed in"
                ,User,token}
            )
        }
    })
   }
   else{
     throw new AppError("Invalid email or password",404)
   }    
}
)

const removeUser = catchError(async(req,res)=>{
    const deleted = await user.findByIdAndDelete(req.params.id)
    if(deleted){
        res.json("User deleted successfully")
    }
    else{
        res.status(404).json("User not found")
    }
})

export {
    signUP,
    signIN,
    confirmEmail,
    findUser,
    removeUser
}