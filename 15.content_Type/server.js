const express = require('express');
const path = require('path')
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));

// 미들웨어를 통해서 사용자의 입력값의 특정 데이터를 req.body에 담아준다
app.use(express.json());
app.use(express.urlencoded());
app.use(express.text())

app.post('/submit-json', (req, res) =>{
    const jsonDate = req.body;
    console.log(jsonDate);

    const reply ={ 
        result : "success",
        message : "잘 받았음"
    }
    res.send(reply);
});

app.post('/submit-form', (req, res) =>{
    const jsonData = req.body;      //JSON이 아니였어서 파싱이 되지않음음
    console.log(jsonData);

    // res.send(jsonData);
});

app.post('/submit-text', (req, res) => {
    const textData = req.body;
    console.log(textData);

    res.send(textData);
})

app.listen(port, () =>{
    console.log('서버 ON');
})