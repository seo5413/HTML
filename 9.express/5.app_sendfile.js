const express = require('express');
const path = require('path');
const app=express();
const port=3000;

app.get('/', (req,res) =>{
    const htmlFilePath = path.join(__dirname, 'index.html');    //절대경로(absolute path, full path)
    res.send(htmlFilePath);
});

app.listen(port, () =>{
    console.log('서버 레디')
});