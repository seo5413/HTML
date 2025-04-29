const express = require('express')
const session = require('express-session');
const morgan = require('morgan');
const sqlite = require('sqlite3');
const path = require('path')

const app = express();
const port = 3000;

const db = new sqlite.Database('memo.db', (err) => {
    if (!err) console.log('DB연결 성공');
});
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
app.post('/api/save', (req, res) => {
    const {title, text} = req.body;

    const query = `INSERT INTO memo (title, text) VALUES (?, ?)`;

    console.log(req.body);
    db.run(query, [title, text], (err, row) => {
        if (err) {
            console.log('오류:', err); // 오류 메시지 출력
        }
        if (row) {
            console.log('결과:', row); // 결과 출력
        } else {
            console.log('결과 없음'); // 결과가 없을 때 메시지 출력
        }
    });
});

app.get('/api/memo', (req, res) => {
    const query = `SELECT * FROM memo`;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('오류:', err);
            res.status(500).send('DB 조회 실패');
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log('서버 동작');
});