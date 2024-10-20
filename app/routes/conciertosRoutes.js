const express = require('express')
const tokenValidator = require('../middlewares/tokenValidator')
const conciertosController = require('../controllers/conciertosController')

const router = express.Router()


router.get("/", tokenValidator, conciertosController.obtenerConciertos)

module.exports = router