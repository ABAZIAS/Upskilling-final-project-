process.on("unhandledRejection",(error)=>{
    console.log("katabt haga 8alat fel code",error.message)
})


import express from 'express'
import { dbConnection } from './db/dbConnection.js'
import { userRouter } from './src/modules/users/users.routes.js'
import { AppError } from "./src/utils/appError.js";
import { globalError } from './src/utils/globalError.js'
import { Noterouter } from './src/modules/notes/notes.routes.js'
const app = express()
const port = 3000

app.use(cors())
dbConnection()
app.use(express.json())
app.use("/users",userRouter)
app.use("/notes",Noterouter)

app.use((req,res,next)=>{
    next(new AppError(`route not found${req.originalUrl}`,404))
})

app.use(globalError)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 

