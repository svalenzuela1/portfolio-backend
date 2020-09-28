const projectModel = require('../models/schemas.js')

//CRUD
//GET
const index = async (req, res) => {
    
    try {

        const indexModel = await projectModel.find({})
        res.status(200).json(indexModel)

    } catch(error){

        res.status(400).send(error)

    }

}

//POST
const create = async(req, res) => {
    try {
        
        const createModel = await projectModel.create(req.body)
        const indexModel = await projectModel.find({})
        res.status(200).json(indexModel)

    } catch(error){

        res.status(400).send(error)

    }
}

//UPDATE
const update = async (req, res) => {
    try{

        const updateModel = await projectModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        const indexModel = await projectModel.find({})
        res.status(200).json(indexModel)

    }catch(error){

        res.status(400).send(error)

    }
}

//DELETE
const destroy = async(req, res) => {
    try{

        const destroyModel = await projectModel.findByIdAndDelete(req.params.id)
        const indexModel = await projectModel.find({})
        res.status(200).json(indexModel)

    }catch(error){

        res.status(400).send(error)

    }
}


module.exports = {index, create, update, destroy}


