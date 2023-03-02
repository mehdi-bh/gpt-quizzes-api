const {dynamoClient} = require("./aws");
const uuid = require('uuid');

const TABLE_NAME = "question";

/* Functions */
const getQuestionById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    };
    return await dynamoClient.scan(params).promise();
};

const getQuestions = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    return await dynamoClient.scan(params).promise();
};

const createQuestion = async (question) => {
    question.id = uuid.v1();
    const params = {
        TableName: TABLE_NAME,
        Item: question
    }
    return await dynamoClient.put(params).promise();
};

module.exports = {
    getQuestionById,
    getQuestions,
    createQuestion,
}