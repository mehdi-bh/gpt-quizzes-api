const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const GPT3_MODEL = "gpt-3.5-turbo";
const TEMPERATURE = 0;
const MAX_TOKENS = 500;

const getResponse = async (prompt) => {
    return await openai.createChatCompletion({
        model: GPT3_MODEL,
        messages: [{"role" : "user", "content" : prompt}],
        temperature: TEMPERATURE,
        max_tokens: MAX_TOKENS,
    });
};

module.exports = {
    getResponse
};
