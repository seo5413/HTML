# pip install bs4
# pip install beautifulsoup4

from bs4 import BeautifulSoup

html_doc = """
<html>
<head>
    <title>간단한HTML예제</title>
</head>
<body>
    <h1>안녕하세요</h1>
    <p>반갑습니다</p>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')
print(html_doc)
print('*'*10)
print(soup)

print(soup.title)
print(soup.h1.text)
print(soup.p.text)