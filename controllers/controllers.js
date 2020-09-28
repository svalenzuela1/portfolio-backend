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
        res.status(202).json(createModel)

    } catch(error){

        res.status(400).send(error)

    }
}

//UPDATE
const update = async (req, res) => {
    try{

        const updateModel = await projectModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updateModel)

    }catch(error){

        res.status(400).send(error)

    }
}

//DELETE
const destroy = async(req, res) => {
    try{

        const destroyModel = await projectModel.findByIdAndDelete(req.params.id)
        res.status(200).json(destroyModel)

    }catch(error){

        res.status(400).send(error)

    }
}


module.exports = {index, create, update, destroy}


