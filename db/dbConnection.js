import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://abazagroup55_db_user:j2CbxCB74y8h_GC@cluster0.ip5vvzn.mongodb.net/finalproject").then(()=>{
        console.log("el db btamenak we btslm 3aleek");
        
    }).catch((error)=>{
        console.log("error:",error);
        
    })
}