const express = require('express')
const app = express()
const port = process.env.port || 5000

app.get('/api/users', (req,res) => {
    const users = [
        {id:1,fullName:'Irwan Antonio', email:'irwan@halodek.com'},
        {id:2,fullName:'Irwan Antonio', email:'irwan@halodek.com'},
        {id:3,fullName:'Irwan Antonio', email:'irwan@halodek.com'},
    ]
    res.json(users)
})


app.listen(port, () =>{ 
    console.log(`Server start in http://localhost:${port}`)
})
