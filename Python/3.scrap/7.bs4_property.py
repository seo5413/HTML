# pip install bs4
# pip install beautifulsoup4

from bs4 import BeautifulSoup

html_doc = """
<html>
<head>
    <title>간단한HTML예제</title>
</head>
<body>
    <div class = "container">
        <h1>안녕하세요</h1>
        <p>반갑습니다</p>
        <a href = "https://www.naver.com">네이버로 가기</a>
        <img src = "example.jpg" alt ="예제이미지">
        <img src = "example2.jpg" alt ="예제이미지" width = "500" height = "500">
        <a href = "https://www.daum.net">네이버로 가기</a>
    </div>
    <ul>
        <li>항목 1</li>
        <li>항목 2</li>
        <li>항목 3</li>
    </ul>
    <div class = "footer">
        <p id="copyright">저작권 copyright 20205</p>
    </div>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')
link_tag = soup.a
link_tags = soup.find_all('a')
print(link_tag)
print(link_tags)



print(link_tag['href'])
# print(link_tags['href'])

for lt in link_tags:
    print(lt['href'])


print('-'*50)
img_tag = soup.img #첫번쨰 이미지가 나옴옴
img_tags = soup.find_all('img') #모든 이미지가 나옴
img_tag2 = img_tags[1] if len(img_tags) > 1 else None

print(img_tag2)

print(f"Src : {img_tag['src']}, Alt : {img_tag['alt']}, width : {img_tag.get('width','no width')} ")
