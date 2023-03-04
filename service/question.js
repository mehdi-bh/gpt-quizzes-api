const {getResponse} = require("../openai/gpt");
const {makeOpenQuestionPrompt, makeMultipleChoicesQuestionPrompt, makeMultipleAnswersQuestionPrompt} = require("./prompt");

const generateOpenQuestion = async (body) => {
    const content = body.content;
    const guidance = body.guidance;
    const language = body.language;
    const quantity = JSON.parse(body.quantity);

    const prompt = makeOpenQuestionPrompt(content, guidance, language, quantity.easy, quantity.medium, quantity.hard);
    const response = await getResponse(prompt);

    return JSON.parse(response.data.choices[0].message.content);
}

const generateMultipleChoicesQuestion = async (body) => {
    const content = body.content;
    const guidance = body.guidance;
    const language = body.language;
    const quantity = JSON.parse(body.quantity);
    const nbChoices = body.nbChoices;

    const prompt = makeMultipleChoicesQuestionPrompt(content, guidance, language, quantity.easy, quantity.medium, quantity.hard, nbChoices);
    const response = await getResponse(prompt);

    return JSON.parse(response.data.choices[0].message.content);
}

const generateMultipleAnswersQuestion = async (body) => {
    const content = body.content;
    const guidance = body.guidance;
    const language = body.language;
    const quantity = JSON.parse(body.quantity);
    const nbChoices = body.nbChoices;

    const prompt = makeMultipleAnswersQuestionPrompt(content, guidance, language, quantity.easy, quantity.medium, quantity.hard, nbChoices);
    const response = await getResponse(prompt);

    return JSON.parse(response.data.choices[0].message.content);
}

module.exports = {
    generateOpenQuestion,
    generateMultipleChoicesQuestion,
    generateMultipleAnswersQuestion
}