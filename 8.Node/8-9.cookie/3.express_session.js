const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;


// 세션 설정 = 세션 데이터는 기본적으로는 서버의 메모리에 암호화 되어서 저장됨
app.use(session({
    secret:'abcd1234',      //세션 데이터를 암호화하기 위한 비밀키키
    resave: false,           //세션 데이터가 변경되지 않아도 다시 저장할 것인가
    saveUninitialized:true, //초기화되지 않은 세션도 저장할 것인가
}));

// 내 커스텀 미들웨어어
function visitCounter(req,res,next){
    // 세션에 visitcount라는게 없으면 0으로 초기화
    req.session.visitCount = req.session.visitCount || 0;

    // 방문 회수 증가
    req.session.visitCount++;

    next();
}

app.use(visitCounter);

app.get('/', (req,res) =>{
    req.session.ticket = 'spc2025';
    req.session.cart = ['python','javascript','glang'];
    res.send(`잘왔다, 당신의 방문 횟수는 : ${req.session.visitCount}`);

});


app.get('/user', (req,res)=>{
    const yoursession = req.session;
    console.log(yoursession);

    // const ticket = req.session.ticket;
    // const cart = req.session.cart;
    const { username, ticket, cart } = req.session;

    if(username){
        res.send(`당신의 이름은 ${username} 입니다. 사용자정보,,,,(생략)`);
    }else{
        res.send('사용자 정보가 없습니다 로그인하세요');
    }

});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.send('안녕히가세요');
});


app.get('/cart',(req,res)=>{
    const yoursession = req.session;
    console.log(yoursession);

    // const ticket = req.session.ticket;
    // const cart = req.session.cart;
    const { username, ticket, cart } = req.session;

    if(username){
        res.send(`당신의 이름은 ${username}, 장바구니 ${cart}`);
    }else{
        res.send('사용자 정보가 없습니다 로그인하세요');
    }
});

app.listen(port,()=>{
    console.log('서버')
});