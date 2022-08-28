const express = require('express')

const app = express()

app.use(express.json())

const checkUser = (req, res, next) => {
    const name  = req.body.name
    if(name === 'aditya'){
        res.json({error: "We don\'t allow aditya name here"})
    }else{
        next()
    }
}

app.get('/', (req, res) => {
    res.json({message: "hello world"})
})

app.post('/', checkUser ,(req, res) => {
    res.send("You are logged in")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log("This server is start at the port number 3000")
})
