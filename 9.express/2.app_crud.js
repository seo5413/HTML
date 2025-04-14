const express = require('express')

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('헬로우');
});
app.post('/user',(req,res) => {
    res.send('사용자 생성성');
});
app.put('/user',(req,res) => {
    res.send('사용자 정보 수정정');
});
app.delete('/user',(req,res) => {
    res.send('사용자 삭제');
});

app.listen(port, () =>{
    console.log(`서버 레디 on ${port}`);
});