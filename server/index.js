import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './Routes/routes.js'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://deepak08:12345@cluster0.q06cc7h.mongodb.net/doctor_appointment?retryWrites=true',{
    useNewUrlParser: true
})
mongoose.connection.once('open',()=>{
    console.log('connected to data base')
})
const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(bodyParser.json())

app.use('/',routes)

app.listen(port,()=>{
    console.log('connected to server at port'+port)
})