const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const port = 3000;

//템플릿 엔진 설정 ejs를 사용할 예정(express가 기본지원)
app.set('view engine', 'ejs'); //views라는 폴더안의 *.ejs 파일을 찾는다다

app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname , 'index.html'));

    // index을 찾아서 치환한다
    res.render('index',{title : '나의 타이틀', message:'EJS 학습중입니다'})
});








app.listen(port, ()=>{
    console.log('서버 실행');
});