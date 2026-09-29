process.on("unhandledRejection",(error)=>{
    console.log("katabt haga 8alat fel code",error.message)
})


import express from 'express'
import { dbConnection } from './db/dbConnection.js'
import { userRouter } from './src/modules/users/users.routes.js'
import { AppError } from "./src/utils/appError.js";
import { globalError } from './src/utils/globalError.js'
import { Noterouter } from './src/modules/notes/notes.routes.js'
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

/*
app.use(async (req, res, next) => {
    try {
        await dbConnection(); // Guarantees the cloud db is ready before next() runs
        next();
    } catch (error) {
        next(new AppError("Failed to connect to database", 500));
    }
});
*/
dbConnection()

app.use("/users",userRouter)
app.use("/notes",Noterouter)

app.get('/', (req, res) => res.send('Helo World!'))
app.use((req,res,next)=>{
    next(new AppError(`route not found${req.originalUrl}`,404))
})

app.use(globalError)

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 

