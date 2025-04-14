// 1. 파일을 읽어서, 내용 전달하는 서버 만들기
// index.html파일을 읽어서 변수에 담아두고
// 2. req가 왔을때, 그 변수의 내용을 전달한다.

const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('index.html','utf8');

const server = http.createServer((req,res) =>{
    res.writeHead(200);
    res.end(data);
});

server.listen(3000, () =>{
    console.log('서버가 3000번 포트를 잘 리슨 하고 있습니다 사용자의 요청사항을 기다리겠습니다.');
});