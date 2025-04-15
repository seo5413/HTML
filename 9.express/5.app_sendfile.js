const express = require('express');
const path = require('path');
const app=express();
const port=3000;

app.use(express.static('public'));                              //우리의 홈에있는 public 폴더를 정적 폴더로 정의함

app.get('/', (req,res) =>{
    const htmlFilePath = path.join(__dirname,'public', 'index.html');    //절대경로(absolute path, full path)
    res.send(htmlFilePath);
});



app.listen(port, () =>{
    console.log('서버 레디')
});