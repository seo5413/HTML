import requests

url = 'https://jsonplaceholder.typicode.com/users'

response = requests.get(url)
users= response.json()

#print(users)
for user in users:
    # print(users)
    # print('-'*10)
    # print(user['name'])
    id = user['id']
    name = user['name']
    username = user['username']
    email = user['email']

    print(f"{id:<2} {name:30} {username:>20} {email:20}")
