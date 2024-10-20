const { createResponse } = require("../utils/responseGenerator");


const obtenerConciertos = async () => {
  let data = [];
  return createResponse(true, data, null, 200);
}

module.exports = {
  obtenerConciertos
}