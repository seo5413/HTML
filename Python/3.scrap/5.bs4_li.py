# pip install bs4
# pip install beautifulsoup4

from bs4 import BeautifulSoup

html_doc = """
<html>
<head>
    <title>간단한HTML예제</title>
</head>
<body>
    <ul>
        <li>항목 1</li>
        <li>항목 2</li>
        <li>항목 3</li>
    </ul>
    <h1>안녕하세요</h1>
    <p>반갑습니다</p>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')
lis = soup.ul.find_all('li')
for li in lis:
    print(li.text)

for li in soup.ul.find_all('li'):
    print(li.text)