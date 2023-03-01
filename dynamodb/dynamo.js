const AWS = require('aws-sdk');
const uuid = require('uuid');

require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "quiz";

/* Functions */
const getQuiz = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    };
    return await dynamoClient.scan(params).promise();
};

const getQuizzes = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    return await dynamoClient.scan(params).promise();
};

const createQuiz = async (quiz) => {
    quiz.id = uuid.v1();
    const params = {
        TableName: TABLE_NAME,
        Item: quiz
    }
    return await dynamoClient.put(params).promise();
};

const updateQuiz = async (quiz) => {
    const params = {
        TableName: TABLE_NAME,
        Item: quiz
    }
    return await dynamoClient.put(params).promise();
};

const deleteQuiz = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    };
    return await dynamoClient.delete(params).promise();
};

module.exports = {
    dynamoClient,
    getQuiz,
    getQuizzes,
    createQuiz,
    updateQuiz,
    deleteQuiz
}