import {note} from "../../../db/models/note.js"

async function getNotes(req,res){
    const notes = await note.find(
        {userId:req.userId}
    ).populate('userId').exec();
    res.json(
        notes
    )
}

const addNote = async (req,res)=>{

    const newNote = await note.create({
        title : req.body.title,
        content : req.body.content,
        userId : req.userId
    })
    res.json({
        message : "Note Added",
        newNote
    })
}

async function updateNote(req,res){
    const {title,content} = req.body
    const Note = await note.findByIdAndUpdate(req.params.id,{
        title,content},
        {new : true} )
    if (Note){
        res.json({message:"Noteeee Updated",Note})
    }
    else res.status(404).json("Note not found")    

} 

async function deleteNote(req,res){
    const deleted = await note.findByIdAndDelete(req.params.id)
    if (deleted){
        res.json("Note deleted")
    }
    else res.status(404).json("Note not found")    

}

export {
    getNotes,
    addNote,
    updateNote,
    deleteNote
}