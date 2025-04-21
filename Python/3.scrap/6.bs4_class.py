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
    <div class = "container">
    <h1>안녕하세요</h1>
    <p>반갑습니다</p>
    </div>
    <div class = "footer">
        <p id="copyright">저작권 copyright 20205</p>
    </div>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')

#class가 container인 div 가져오기
footer_div = soup.find('div', class_='footer')
print(footer_div.p.text)

copyright = soup.find('p', id='copyright')
print(copyright.text)