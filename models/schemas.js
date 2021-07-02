//bringing in the library into a global variable
const mongoose = require('mongoose')

//assigning two extra global variables to mongoose library
const {Schema, model} = mongoose 

const projectSchema = new Schema({
    title: {type: String}, 
    description: {type: String},
    imageURL: {type: String}, 
    projectURL: {type: String},
    githubURL: {type: String}
})

const projectModel = model('Project', projectSchema); 

//exporting the schema from above 
module.exports = projectModel

