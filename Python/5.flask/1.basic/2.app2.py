from flask import Flask, request, make_response, jsonify

app = Flask(__name__)

users = [
    {'id': 1, 'name': 'Alice', 'age': 25, 'phone': '123-456-788'},
    {'id': 2, 'name': 'Bob', 'age': 30, 'phone': '222-456-719'},
    {'id': 3, 'name': 'Charlie', 'age': 35, 'phone': '193-436-719'},
    {'id': 4, 'name': 'Alice', 'age': 35, 'phone': '183-476-589'},
]

@app.route('/')
def main():
    return "메인"

@app.route('/users')
def get_users():
    return jsonify(users)

@app.route('/users/<int:user_id>')
def get_user_by_id(user_id):
    user = next((user for user in users if user['id'] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({'error': 'User not found'}), 404

@app.route('/search')
def search_user():
    query = request.args.get('name')
    if not query:
        return jsonify({'error': '이름은 필수 값입니다'}), 400

    results = [user for user in users if query.lower() in user['name'].lower()]
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
