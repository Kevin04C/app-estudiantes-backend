const Concierto = require('../models/Concierto')


const obtenerConciertos = async () => {
  try {
   const data = Concierto.getConciertos();
    return createResponse(true, data, null, 200);
  } catch (error) {
    return createResponse(false, null, "Error al obtener los conciertos", 500);
  }

}

module.exports = {
  obtenerConciertos
}