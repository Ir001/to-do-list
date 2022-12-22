const express = require('express')
const bodyParser =  require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Mongoose Connect
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/to-do-list')
const db = mongoose.connection
db.on('error', (err) => {
    console.log(`Connection error: ${err}`)
})
db.on('open', () => {
    console.log(`DB Connected!`)
})


const app = express()
const AuthRoute = require('./routes/auth')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/api/users', (req,res) => {
    const users = [
        {id:1,fullName:'Irwan Antonio', email:'irwan@halodek.com'},
        {id:2,fullName:'Irwan Antonio', email:'irwan@halodek.com'},
        {id:3,fullName:'Irwan Antonio', email:'irwan@halodek.com'},
    ]
    res.json(users)
})

const port = process.env.port || 5000
app.listen(port, () =>{ 
    console.log(`Server start in http://localhost:${port}`)
})
app.use('/api/auth', AuthRoute)
