const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.json()); // 사용자의 입력을 파싱해서 req.body 에 담아라.
app.use(express.static('public'));
app.use(morgan('dev'));

app.post('/api/chat', (req, res) => {
    const question = "Echo: " + req.body.question;
    console.log(question);
    res.json({question}); // { question } ==> { "question" : "question의 value" }
});

app.listen(port, () => {
    console.log('서버 레디');
});