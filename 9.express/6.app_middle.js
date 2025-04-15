const express = require('express');
const path = require('path');
const app=express();
const port=3000;

// function myMiddleware(req, res, next){
//     console.log(`MyLog : ${req.method}, ${req.url}`)
//     next();
// }

app.use((req, res, next) =>{
    console.log(`MyLog : ${req.method}, ${req.url}`);
    req.myData = 1234;
    next();
});

app.use((req, res, next) =>{
    console.log(`MyLog2 : ${req.method}, ${req.url}`);
    req.requestTime = Date.now();
    next();
});

app.use(express.static('public'));                              //우리의 홈에있는 public 폴더를 정적 폴더로 정의함

app.get('/', (req,res) =>{
    const htmlFilePath = path.join(__dirname,'public', 'index.html');    //절대경로(absolute path, full path)
    console.log(req.myData);
    const date = new Date(req.requestTime);
    console.log(`요청 시간 : ${date.toLocaleString()}` );
    res.send(htmlFilePath);
});



app.listen(port, () =>{
    console.log('서버 레디')
});