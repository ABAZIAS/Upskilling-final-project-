import {Router} from "express"

import { checkEmail } from "../../middleware/checkEmail.js"
import { signUP,findUser,signIN,confirmEmail,removeUser } from "./users.controllers.js"
import { catchError } from "../../middleware/catchError.js"
import { validate } from "../../middleware/validate.js"
import { signInValidation, signUpValidation } from "./users.validation.js"
import { verifyToken } from "../../middleware/verifyToken.js"

export const userRouter = Router()

userRouter.get("/:id",
        findUser
)

userRouter.get("/verify/:token",
      catchError(confirmEmail)
)

userRouter.post("/signup",
   validate(signUpValidation),checkEmail,signUP
)

userRouter.post("/signin",
        validate(signInValidation),signIN
)
userRouter.delete("/:id",
     verifyToken,removeUser
)

