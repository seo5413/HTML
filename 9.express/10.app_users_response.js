const express = require('express');
const path = require('path');

const users = {};
let nextId = 1;

const app = express();
const port = 3000;

app.use(express.json());

// 사용자 조회
app.get('/', (req, res) =>{
    console.log('메인홈');
    res.sendFile(path.join(__dirname, 'public', 'users.html'));
});

app.use(express.static('public'));


app.get('/users', (req, res) => {
    console.log('사용자 조회');
    res.send(users); // text/html; charset=utf-8  <-- 문자열.. 이게 기본값
    // res.json(users); // application/json 
});


// 사용자 생성
app.post('/users', (req, res) => {
    console.log('사용자 생성 요청' ,req.body);
    try {
        const name = req.body.name;
        users[nextId++] = name;
        
        res.status(201).send('등록 성공');
    } catch (error) {
        res.status(500).send('서버 내부 오류');
        
    }
});

// 사용자 정보 수정
app.put('/users/:id',(req, res) => {
    console.log('사용자 수정 요청');
    const id = req.params.id;
    users[id] = req.body.name;
    res.send('사용자 수정');
});

// 사용자 삭제
app.delete('/users/:id',(req,res) =>{
    console.log('사용자 정보 삭제');
    try{
        const id = req.params.id;

        console.log(users[id]);
        if(!users[id]){
            return res.status(404).send(`해당 사용자만 ID : ${id}는 존재하지 않습니다.`)
        }

        delete users[id];
        
        res.status(201).send('사용자 삭제');
        
    }catch{
        res.status(500).send('서버 내부 오류류');

    }
});








app.listen(port,() =>{
    console.log(`서버 포트가 ${port} 에서 실행 중입니다.`)
})