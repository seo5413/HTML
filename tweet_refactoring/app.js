const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();

const routes = require('./routes')

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.json()); //req.body 안에 프런트에서 보낸 json 이 담긴다다
app.use(session({
    secret : 'this-is-my-password',
    resave : false,
    saveUninitialized : false
}))

function loginRequired(req, res, next){
    if(!req.session || !req.session.user){
        return res.status(401).json({error : '로그인이 필요합니다'})
    };
    next();
}

const db = new sqlite3.Database('database.db', (err) => {
    if(err){
        console.error('DB연결 실패');
    }else{
        console.log('DB연결 성공');
        
        db.run('PRAGMA foreign_keys = ON');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log('서버');
})