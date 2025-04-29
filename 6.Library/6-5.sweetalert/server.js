const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

const port = 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '2.example.html'));
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.post('/api/login', async (req,res) => {
    const { email , password } = req.body;
    console.log('입력값 : ', email, password);

    await sleep(2000);

    res.json({ message : '로그인에 성공하였습니다.'})

})



app.listen(port, () => {
    console.log('서버 레디');
})