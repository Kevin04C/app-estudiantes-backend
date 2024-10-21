const { request, response } = require("express")
const openIaService = require('../services/openiaService')
 


const postMessageGPT = async (req = request, res = response, next) => {
  try {
    const { contentMessage } = req.body;
    const { success, data, errorMsg, statusCode } = await openIaService.generateOpenAIResponse(contentMessage)
    
    const response = {
      success,
      data,
      errorMsg
    }
    return res.status(statusCode).json(response)
  } catch (error) {
    next(error);
  }

}

module.exports = {
  postMessageGPT
}