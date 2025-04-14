const express = require('express')

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('헬로우, 메인페이지지');
});

//익스프레스가 URL 경로에 가변인자를 받기 위해서, 클론을 사용하도록 정했음음
app.get('/users/:id',(req,res) => {
    const id = req.params.id;   //위에 가변인자는 res.params안에 담겨서 옴
    res.send(`사용자 정보, ID : ${req.params.id}`);
});
app.get('/users/:id/profile',(req,res) => {
    const id = req.params.id;   //위에 가변인자는 res.params안에 담겨서 옴
    res.send(`사용자 정보, ID : ${req.params.id}`);
});
//search?keyword = programming&category=javascript
app.get('/search',(req,res) =>{
    const keyword = req.query.keyword;
    const category = req.query.category;

    res.send(`키워드 : ${keyword}, 카테고리 ${category}`);
})
app.listen(port, () =>{
    console.log(`서버 레디 on ${port}`);
});