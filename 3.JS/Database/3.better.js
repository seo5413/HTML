const sqlite3 = require('better-sqlite3')
// 동기로 동작하기에 promise처리 x

const db = sqlite3('test.db');

//1. 테이블 생성성
db.exec(`CREATE TABLE IF NOT EXISTS greetings(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        message Text
)`);

// 데이터 삽입입
const insert = db.prepare('INSERT INTO greetings (message) VALUES (?)');
insert.run('Hello, BetterSQLite3!');


// 데이터 조회
const select = db.prepare('SELECT * FROM greetings');
const greetings = select.all();
// console.log(greetings);

greetings.forEach((row) => {
    console.log(`인사${row.id} : ${row.message}`);
});
