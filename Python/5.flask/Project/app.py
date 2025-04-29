from flask import Flask,render_template,request,send_from_directory
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=["POST","GET"])
def login():
    
    username = request.form.get('username')
    password = request.form.get('password')

    conn = sqlite3.connect('users.db')
    cur = conn.cursor()

    cur.execute('SELECT* FROM users WHERE username=? AND password=?',(username,password))
    user = cur.fetchone()

    conn.close()
    if user:
        return "로그인 성공"
    else:
        return "로그인 실패"


if __name__ == '__main__':
    app.run(debug=True)