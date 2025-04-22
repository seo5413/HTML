const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('test.db');

// 아래 모든 라인이 비동기로 실행됨을 인재해야한다. 
// run은 실행행
db.run('CREATE TABLE IF NOT EXISTS message(text TEXT)', (err) => {
    console.log('테이블 생성에 성공한 시점')
    db.run('INSERT INTO message (text) VALUES (?)', ['Hellow,SQLite!'], (err) =>{
        console.log('여기는 삽입에 성공한 시점')
        // each는 실행 결과를 받아올 수 있음음
        db.each('SELECT * FROM message', (err,row) => {
            console.log(row.text);
        }); 

        db.each((err) =>  {
            console.log('성공적으로 연결에 종료한 시점');
            db.close();
        });
    });
});

// each는 실행 결과를 받음










