const express = require('express')
const openIaController = require('../controllers/openIaController')
const tokenValidator = require('../middlewares/tokenValidator')
const { requestMessageGpt } = require('../middlewares/validators')

const router = express.Router()

router.post("/", [tokenValidator], openIaController.postMessageGPT)


module.exports = router
