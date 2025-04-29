const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session')

const app = express();
const port = 3000;
app.use(session({
    secret:'abcd1234',      //세션 데이터를 암호화하기 위한 비밀키키
    resave: false,           //세션 데이터가 변경되지 않아도 다시 저장할 것인가
    saveUninitialized:true, //초기화되지 않은 세션도 저장할 것인가
}));

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
    { id: 3, username: 'user3', password: 'password3' },
]


app.use(express.urlencoded());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/user', (req,res) => {
    const user = req.session.user;

    if(user){
        const {username, password} = req.session.user;
        res.send(`사용자 이름 : ${username} , 패스워드 : ${password}`);
    }else{
        res.send("로그인 하시오")
    }
});

app.post('/login', (req, res) => {
    
    const {username, password} = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = { username: user.username, password: user.password };
        res.json({ message: '로그인 성공' });
    } else {
        res.status(401).json({ message: '로그인 실패' });
    }
});

app.listen(port, () => {
    console.log('서버');
});