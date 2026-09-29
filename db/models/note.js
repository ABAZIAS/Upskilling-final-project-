import mongoose , {Schema} from "mongoose"

const noteSchema = new Schema ({
    title: {
        type : String ,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    userId : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : "User",
    }
});

export const note = mongoose.model("Note",noteSchema)
