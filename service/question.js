const {getResponse} = require("../openai/gpt");
const {makeOpenQuestionPrompt} = require("./prompt");
const generateOpenQuestion = async (body) => {
    const content = body.content;
    const guidance = body.guidance;
    const language = body.language;
    const quantity = JSON.parse(body.quantity);

    const prompt = makeOpenQuestionPrompt(content, guidance, language, quantity.easy, quantity.medium, quantity.hard);
    const response = await getResponse(prompt);
    return JSON.parse(response.data.choices[0].text);
}

module.exports = {
    generateOpenQuestion
}