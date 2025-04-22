const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('test.db');

// 아래 모든 라인이 비동기로 실행됨을 인재해야한다. 
// run은 실행
db.run('CREATE TABLE IF NOT EXISTS message(text TEXT)');
db.run('INSERT INTO message (text) VALUES (?)', ['Hellow,SQLite!']);

// each는 실행 결과를 받음
db.each('SELECT * FROM message', (err,row) => {
    console.log(row.text);
});

db.close();









