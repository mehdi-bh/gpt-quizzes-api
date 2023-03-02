const {generateOpenQuestion} = require("../service/question");
const {createQuestion} = require("../dynamodb/question");
const postQuestion = async (body) => {
    const type = body.type;

    switch (type) {
        case "OQ":
            const questions = await generateOpenQuestion(body);

            questions.forEach(q => {
                q.type = "OQ";
                createQuestion(q);
            });

            return questions;

        case "MCQ":
            // TODO: multiple choice questions

        case "MAQ":
            // TODO: multiple answer questions
    }
}

module.exports = {
    postQuestion
}