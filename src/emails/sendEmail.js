import nodemailer from "nodemailer";
import { htmlCode } from "./htmlEmail.js";
import jwt from "jsonwebtoken"

export async function sendMail(user){
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abazagroup55@gmail.com",
    pass: "qeeadjyqrcqpmoib",
  },
});

jwt.sign({email:user.email},"email(secretkey)",async (error,token)=>{
  if(error){
    return res.status(500).json({message:"error generating token",error:error.message})
  }
  else{
  const info = await transporter.sendMail({
      from: '"Abaza Team" <abazagroup55@gmail.com>', // sender address
      to: user.email, // list of recipients
      subject: "Hello", // subject line
      text: "", // plain text body
      html: htmlCode(token,user.name), // HTML body
    });
  
    console.log("Message sent",info.messageId);
}
})  
}