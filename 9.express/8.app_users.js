const express = require('express');
const path = require('path');
const users = {};
let nextId = 1;
const app = express();
const port = 3000;

app.use(express.json());

// 사용자 조회
app.get('/users', (req, res) =>{
    console.log('사용자 정보');
    res.send(users);
});


// 사용자 생성
app.post('/users', (req, res) => {
    console.log('사용자 생성 요청' ,req.body);
    const name = req.body.name;
    users[nextId++] = name;
    res.send('성공');
});

// 사용자 정보 수정
app.put('/users/:id',(req, res) => {
    console.log('사용자 수정 요청' ,req.params.id);
    const id = req.params.id;
    users[id] = req.body.name;
});

// 사용자 삭제
app.delete('/users/:id',(req,res) =>{
    console.log('사용자 정보 삭제');
     const id = req.params.id;
    delete users[id];
    res.send('사용자 삭제');
});








app.listen(port,() =>{
    console.log(`서버 포트가 ${port} 에서 실행 중입니다.`)
})