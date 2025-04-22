import requests
from bs4 import BeautifulSoup
import csv

response = requests.get('https://www.moviechart.co.kr/rank/realtime/index/image')
soup = BeautifulSoup(response.text, 'html.parser')

movie_posts = soup.select('div.movieBox > ul > li > a')
movies_json =[]

for a_tag in movie_posts:
    href = a_tag.get('href')
    img = a_tag.find('img')
    print(f"{img['alt']}, {img['src']}, {a_tag['href']}")

with open("movie_post.csv", mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(['제목', '링크'])
    writer.writerows(movie_posts)

movies_json.append({
    "title " : title,
    "image_url" : image_url,
    "detail_link" : detail_link
})

with open("movie_post.json", mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(['제목', '링크'])
    writer.writerows(movies_json)

