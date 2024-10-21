const { openai } = require("../config/openAIClient");
const { createResponse } = require("../utils/responseGenerator");


const generateOpenAIResponse = async (contentMessage) => {
  try {
    
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Eres un modelo GPT-4.0-0 Mini configurado para responder con ok cada vez que el usuario mencione la palabra testeo. Para cualquier otra consulta, responde como un experto en todo lo que te pregunte el usuario",
        },
        { role: "user", content: contentMessage },
      ],
      model: "gpt-4o-mini",
    });
    const response = completion.choices[0].message.content;
    return createResponse(true, response, null, 200);
  } catch (error) {
    return createResponse(false, null, "Error al obtener la respuesta de OpenAI", 400);
  }
};


module.exports = {
  generateOpenAIResponse
}