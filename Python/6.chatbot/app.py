from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import time
import random
import json  # 요거도 필요해요

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chatbot():
    with open('movie_chart.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    req_data = request.get_json()
    message = req_data.get('question', '')

    if "영화 추천" in message:
        random_item = random.choice(data)
        reply_msg = f"추천 영화: {random_item.get('title', '알 수 없음')}"
    else:
        reply_msg = "일치하는 영화가 없습니다."

    time.sleep(1)  # 딜레이
    return jsonify({'question': reply_msg})

if __name__ == "__main__":
    app.run(debug=True)