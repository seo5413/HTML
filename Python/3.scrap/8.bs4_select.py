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
link_tag = soup.select_one('a')
print(link_tag)
print(link_tag['href'])
print(link_tag.text)

link_tags = soup.select('a') # 모든 a태그 
for lt in link_tags:
    print(lt.text, lt['href'])

div_container = soup.select_one('div.containter')
print('div_container: ', div_container)


copyright = soup.select_one('#copyright') # id가 copyright인것
print(copyright)

div_container_p = soup.select_one('div.container_p')
print(div_container_p)

