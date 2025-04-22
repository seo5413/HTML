from flask import Flask
from flask import request

app = Flask(__name__) #직접 이름을 작성해도 무방함

@app.route('/')
def home():
    return '<H1>Hello, Flask</H1>'

@app.route('/user')
@app.route('/user/<int:user_id>') # 가변 인자(파라미터 = parameter)
def user_home(user_id): # 가변 인자를 함수 인지(argument)로 받음
    return f'<H1>사용자 페이지 숫자ID : {user_id}</H1>'

@app.route('/admin/<usernames>')
def user_admin(username='Admin'): # 가변 인자를 함수 인지(argument)로 받음
    return f'<H1>사용자 페이지 {username}</H1>'

# Query parameter 처리
@app.route('/search')
def search():
    query = request.args.get('q')
    page = request.args.get('page', default=1)

    return f"검색중 키워드 : {query}, 페이지{page}"


if __name__ == '__main__' : #파이썬의 메인 함수, 내 파일을 실행했을때 호출
    app.run()