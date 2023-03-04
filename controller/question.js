const {generateOpenQuestion, generateMultipleChoicesQuestion, generateMultipleAnswersQuestion} = require("../service/question");
const {createQuestion} = require("../dynamodb/question");
const postQuestion = async (body) => {
    const type = body.type;

    let questions = [];
    switch (type) {
        case "OQ":
            questions = await generateOpenQuestion(body);

            questions.forEach(q => {
                q.type = "OQ";
                createQuestion(q);
            });

            return questions;

        case "MCQ":
            questions = await generateMultipleChoicesQuestion(body);

            questions.forEach(q => {
                q.type = "MCQ";
                createQuestion(q);
            });

            return questions;

        case "MAQ":
            questions = await generateMultipleAnswersQuestion(body);

            questions.forEach(q => {
                q.type = "MAQ";
                createQuestion(q);
            });

            return questions;
    }
}

module.exports = {
    postQuestion
}