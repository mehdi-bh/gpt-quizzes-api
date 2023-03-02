const express = require('express');
const bodyParser = require('body-parser')
const {postQuestion} = require("./controller/question");
const {getQuestions, getQuestionById} = require("./dynamodb/question");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080, () => {
    console.log("Server launched");
})

/**** Questions ****/
app.get('/question', async (req, res) => {
    try {
        const questions = await getQuestions();
        res.json(questions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

app.get('/question/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const question = await getQuestionById(id);
        res.json(question);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

app.post('/question', async (req, res) => {
    const body = req.body;
    try {
        const questions = await postQuestion(body);
        res.json(questions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

