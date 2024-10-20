const { createResponse } = require("../utils/responseGenerator");


const obtenerConciertos = async () => {
  try {
    const url = "https://real-time-events-search.p.rapidapi.com/search-events";
  
    const params = new URLSearchParams();
    params.append("query", "Concerts in Peru");
    params.append("date", "any");
    params.append("is_virtual", "false");
    params.append("start", "0");

    const queyrString = params.toString();

    const response = await fetch(`${url}?${queyrString}`, {
      headers: {
        "x-rapidapi-key": "5f575eaf72msh95906ef58ae7b51p185be8jsn4f355a8a60d9",
        "x-rapidapi-host": "real-time-events-search.p.rapidapi.com"
      }
    })    
    const conciertosData  = await response.json();

    /** Mapear la respuesta */
    const data =  conciertosData.data;

    return createResponse(true, data, null, 200);
  } catch (error) {
    return createResponse(false, null, "Error al obtener los conciertos", 500);
  }

}

module.exports = {
  obtenerConciertos
}