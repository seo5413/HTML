const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-cookie': 'mycooki=test'})
    res.end('쿠키받아가시오')
});

server.listen(3000,() => {
    console.log('서버 레디');
});