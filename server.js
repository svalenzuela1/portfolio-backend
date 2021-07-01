require('dotenv').config() //READS OUR .env file, and loads into process .env object 

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

//router 
const router = require('./routes/routes.js')

// a global variable to use for other function routes 
const PORT = process.env.PORT; //assign port from .env file
const NODE_ENV = process.env.NODE_ENV

//for mongo database
const mongoURI = process.env.mongoURI + "portfolioBackend";

//mongoose connection
const db = mongoose.connection
const mongoConfig = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

//connection to Mongo 
mongoose.connect(mongoURI, mongoConfig, () => {
    console.log("mongo is wooooorking")
})

//WHITELIST 
const whiteList = ["http:localhost:3000/"]
const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true)
        } else {
            callback(new Error('not allowed by CORS'))
        }
    }
}
//END OF WHITELIST

//MIDDLEWARE 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('public'))

//route to URL
//app.use('/', router)
require('./routes/routes')(app);

//this should show up in localhost 
app.get('/', (req, res) => {
    res.send('Hellloooo localhost')
})


app.listen(PORT, () => {
    console.log(`This should show up in VSCODE terminal. Listening on ${PORT}`)
})


module.exports = mongoose 