const express = require('express');
const fs = require('fs');

const data = fs.readFileSync('index.html','utf8');
const app=express();
const port=3000;

app.get('/', (req,res) =>{
    res.send(data);
});

app.listen(port, () =>{
    console.log('서버 레디')
});