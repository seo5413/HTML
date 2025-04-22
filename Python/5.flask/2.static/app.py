from flask import Flask, render_template

app = Flask(__name__, static_folder=None)
app = Flask(__name__, static_folder='my_static')

@app.route('/')
def home():
    return render_template('index.html')
    
@app.route('/user')
def user():
    return render_template('user.html', text="Hello")

if __name__ == '__main__':
    app.run(port=5000, debug=True, host="0.0.0.0")