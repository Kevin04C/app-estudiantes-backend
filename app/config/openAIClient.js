const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.CLAVE_API_OPENAI
});


module.exports = {
  openai
}