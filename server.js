require('dotenv').config() //READS OUR .env file, and loads into process .env object 

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')


const PORT = process = process.env.PORT; //assign port from .env file
const NODE_ENV = process.env.NODE_ENV



