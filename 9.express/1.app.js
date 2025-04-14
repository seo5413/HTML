const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req,res) =>{
    res.send('Hello, Express!');
});

app.get('/user', (req,res) =>{
    res.send('Hello, User!');
});

app.listen(port,() =>{
    console.log(`서버가 준비됌 ${port}`);
});