const sqlite = require('better-sqlite3')

const db = sqlite('test.db')

// 테이블 생성성
db.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT
    )`)

// 사용자 조회
const allusers = db.prepare('SELECT * FROM users');
const allusers_result = allusers.all();
console.log('조회된 사용자: ' , allusers_result);


// 신규 사용자 만들기기
const newuser = {
    username: 'user1',
    email:'user1@example.com'
}

const insert = db.prepare('INSERT INTO users (username, email) VALUES(?,?)');
insert.run(newuser.username, newuser.email);

const userId = 1;
const user = db.prepare('SELECT * FROM users WHERE id = ?');
const auser = user.get(userId);

console.log('검색된 사용자 : ', auser);

// 사용자 정보 갱신
const updateUser = {
    id : 1,
    username : 'user002',
    email : 'user002@example.com'
};

const update = db.prepare('UPDATE users SET username=?, email=? WHERE id=?');
update.run(updateUser.username, updateUser.email, updateUser.id);
console.log('사용자 정보 갱신 완료');

const deleteUser = {
    id: 2,
};

const del = db.prepare('DELETE FROM users WHERE id=?');
del.run(deleteUser.id);
console.log('삭제 완료');

db.close();