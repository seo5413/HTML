from flask import Flask, request,render_template,redirect,url_for,send_from_directory
import sqlite3

app = Flask(__name__)


@app.route('/')
def home():
     return send_from_directory('static','index.html')

@app.route('/login', methods=["POST"])
def user_login():
      username = request.form.get('username')
      password = request.form.get('password')
      
      conn = sqlite3.connect('users.db')
      cur = conn.cursor()


      cur.execute('SELECT * FROM users WHERE username=? AND PASSWORD=?',{username,password})
      user = cur.fetchone()[0]

      conn.close()    
      if user:
        return "로그인 성공"
      else:
        return "로그인 실패"   
        
if __name__ == "__main__" :
    app.run(debug=True)