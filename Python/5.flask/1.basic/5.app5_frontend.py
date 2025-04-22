from flask import Flask,render_template

app = Flask(__name__)

users = ['Alice', 'Bob', 'Charlie', 'Robert','Eve']

@app.route('/')
def home():
    return render_template('index.html',name="john")

@app.route('/users')
def get_users():
    return render_template('users.html', users=users)

if __name__ == '__main__':
    app.run(port=5000, debug=True)  # 프로덕션 코드에선 절대로 True를 한 상태로 배포해서는 안된다3
    