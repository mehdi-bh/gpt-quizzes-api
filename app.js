const express = require('express');
const bodyParser = require('body-parser')
const {getQuizzes, getQuiz} = require("./dynamodb/dynamo");
const {getResponse} = require("./openai/gpt");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080, () => {
    console.log("Server launched");
})

/* Get */
app.get('/quiz', async (req, res) => {
    try {
        const quizzes = await getQuizzes();
        res.json(quizzes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

app.get('/quiz/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await getQuiz(id);
        res.json(quiz);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' });
    }
})


/* TODO :
    1. POST prompt & guidance
    2. Call GPT3 and receive output
    3. Store object in dynamoDB
*/
/* Post */
app.post('/quiz', async (req, res) => {
    let data = req.body;
    const response = await getResponse();
    console.log(response.data);
    res.json(response.data);
})

