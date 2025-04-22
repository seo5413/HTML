import sqlite3

conn = sqlite3.connect('users.db')
cur = conn.cursor()

cur.execute('''
            CREATE TABLE IF NOT EXISTS users(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                age INTEGER
            )
            ''')
# 사용자 조회
cur.execute('SELECT COUNT(*) FROM users')
count = cur.fetchone()[0] # 전달 받은 튜플에서의 첫번째 값 요청

if count == 0:
    cur.execute('INSERT INTO users (name, age) VALUES (?,?)', ('Alice',30))
    cur.execute('INSERT INTO users (name, age) VALUES (?,?)', ('Bob',29))
    # 지금까지 한걸 저장
    conn.commit()
else:
    print('이미 데이터 존재 :', count)

#모든 데이터 가져오기

cur.execute('SELECT * FROM users')
data = cur.fetchall()
print(data)

for row in data:
    print(f'이름: {row[1]}, 나이 : {row[2]}' )

# 접속 종료
conn.close()