require('dotenv').config() //READS OUR .env file, and loads into process .env object 

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

// a global variable to use for other function routes 
const PORT = process = process.env.PORT; //assign port from .env file
//const NODE_ENV = process.env.NODE_ENV


//this should show up in localhost 
app.get('/', (req, res) => {
    res.send('it woooooorks')
})

app.listen(PORT, () => {
    console.log(`This should show up in VSCODE terminal. Listening on ${PORT}`)
})


