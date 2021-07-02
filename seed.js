require('dotenv').config()

//mongoose library brought in
const mongoose = require('mongoose')

const projectModel = require('./models/schemas.js')

//the concatenation adds "" to the mongo database
const mongoURI = process.env.mongoURI + "portfolioBackend"

//mongoose connection 
const db = mongoose.connection
const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//mongo connection to mongoose
mongoose.connect(mongoURI, mongoConfig, () => {
    console.log('MONGO IS CONNECTED')
})

//seed data
let projects = [
    {
        title: "Social Network Lite", 
        description: "A Social Network app",
        imageURL: "https://res.cloudinary.com/stephaniev/image/upload/v1625193687/Screen_Shot_2021-07-01_at_10.40.59_PM_bvq6ue.png", 
        projectURL: "https://software-sleeps.herokuapp.com/",
        githubURL: "https://github.com/Software-Sleeps/DI-Capstone2-SocialNetworkLite" 
    }
]

//error response 
projects, (error, response) => {
    if(error){
        console.log(error)
    } else {
        console.log(response)
    }
}

projects.forEach(element => {

    //populate projects
    projectModel.create(element)
})