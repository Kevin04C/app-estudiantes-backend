const conciertosService = require("../services/conciertoService");


const obtenerConciertos = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode} = await conciertosService.obtenerConciertos();
    const response = {
      success, 
      data,
      errorMsg
    }
    res.status(statusCode).json(response);
  } catch (error) {
    next(error);
  }
}


module.exports = {
  obtenerConciertos
}