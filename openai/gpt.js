const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const GPT3_MODEL = "text-davinci-003";
const TEMPERATURE = 0;
const MAX_TOKENS = 400;

const getResponse = async (prompt) => {
    return await openai.createCompletion({
        model: GPT3_MODEL,
        prompt: prompt,
        temperature: TEMPERATURE,
        max_tokens: MAX_TOKENS,
    });
};

module.exports = {
    getResponse
};
