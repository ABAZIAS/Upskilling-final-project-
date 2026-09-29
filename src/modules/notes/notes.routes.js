import {Router} from "express"
import { addNote, deleteNote, getNotes,updateNote } from "./notes.controllers.js"
import { verifyToken } from "../../middleware/verifyToken.js"
import { addNoteValidation, updateNoteValidation } from "./notes.validation.js"
import { validate } from "../../middleware/validate.js"
import { checkUser } from "../../middleware/checkUser.js"

export const Noterouter = Router()

Noterouter.get("/",
    verifyToken,getNotes
)
Noterouter.post("/",
    verifyToken,checkUser,validate(addNoteValidation),addNote
)
Noterouter.put("/:id",
    validate(updateNoteValidation),updateNote
)
Noterouter.delete("/:id",
    deleteNote
)
