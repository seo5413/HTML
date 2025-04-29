import sqlite3

conn = sqlite3.connect('users.db')
cur = conn.cursor()

cur.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)
''')

# 테스트용 계정 삽입
cur.execute('INSERT INTO users (username, password) VALUES (?, ?)', ('testuser', 'testpass'))

conn.commit()
conn.close()

