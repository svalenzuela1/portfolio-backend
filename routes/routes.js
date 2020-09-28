const express = require('express')

const router = express.Router()

const {index, create, update, destroy} = require('../controllers/controllers.js')

router.get('/', index)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)

module.exports = router