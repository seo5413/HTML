const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const sqlite3 = require('sqlite3'); 
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// const users = [
//     {id: 1, username: 'user1', password: 'password1'},
//     {id: 2, username: 'user2', password: 'password2'},
// ]

const db = new sqlite3.Database('users.db');

app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(session({
    secret: 'this-is-my-password',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/user', (req, res) => {
    const user = req.session.user;

    if (user) {
        const { username, password } = req.session.user;
        res.send(`당신은 계정명은 ${username} 이고 비밀번호는 ${password} 입니다.`);
    } else {
        res.send('로그인하고오시오...');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send(`안녕히가세요...`);
});

app.post('/login',async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // const user = users.find((u) => u.username === username && u.password === password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    db.get('SELECT * FROM users WHERE username=?',[username], async (err,row)=>{
        if(row){
            const isMatch = await bcrypt.compare(password, row.password)
            if(isMatch){
                req.session.user = { username: row.username, password: row.password } 
                res.json({ message: '로그인 성공'}); 
            }else{
                res.status(401).json({ message: '로그인 실패'});
            }
        }else{
            res.status(401).json({ message: '로그인 실패'});
        }
    })
    // db.get('SELECT * FROM users WHERE username=? AND password=?', [username, password], (err, row) => { 
    //     if (row) {
    //         req.session.user = { username: row.username, password: row.password } 
    //         res.json({ message: '로그인 성공'}); 
    //        
    //     }
    // })
});

app.listen(port, () => {
    console.log('서버레디');
});