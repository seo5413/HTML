# https://www.pythonscraping.com/pages/page3.html

# 해당 페이지 요청
# 해당 페이지를 파싱해서 상품명과 가격 출력

import requests
from bs4 import BeautifulSoup

response = requests.get('https://www.pythonscraping.com/pages/page3.html')

soup = BeautifulSoup(response.text, 'html.parser')
# print(data)

# table = soup.select_one('#giftList')
# gifts = table.select('tr')
gifts = soup.select_one('#giftList > tr')
print(len(gifts))

for gift in gifts:
    td = gift.select('td')
    if len(td) > 0:
        print(td[0].text.strip(),td[2].text.strip())
        #.strip() 문자열내에서 원하는 문자열 또는 공백을 모두 제거한다