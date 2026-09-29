import mongoose , {Schema} from "mongoose"

const userSchema = new Schema ({
    name : {
        type : String,
        required : true,
        trim : true,
        minLength:[3,"min length is 3 "],
        maxLength:[50,"max length is 50"],
    },
    email : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['user','admin'],
        default : 'user',
    },
    password : {
        type : String,
        required : true,
    },
    confirmEmail : {
        type : Boolean,
        default : false,
    }
})

export const user = mongoose.model("User",userSchema)