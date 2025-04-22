const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('users.db');


db.run('CREATE TABLE IF NOT EXISTS users(text TEXT)');

db.run('INSERT INTO users (text) VALUES (?),(?)', ['user3','password3']);

db.each('SELECT * FROM users',(err,row) =>{
    console.log(row.text);
})

db.close();
