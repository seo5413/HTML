const sqlite = require('better-sqlite');
const express = require('express');

const app = express();
const db = sqlite('suers.db');


app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/login', (req,res) => {
   const { username, password } =req.body;
   const user = db.prepare('SELECT * FROM users WHERE username=? AND password=?').get(username,password);
   if (user) {
       res.send('로그인 성공');
    }else{
       res.send('로그인 시랲');
    }   
});

app.listen(3000,()=>{
    console.log('서버작동')
});