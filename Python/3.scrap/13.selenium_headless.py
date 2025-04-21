from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

from bs4 import BeautifulSoup


import time
import csv

options = Options()
options.add_argument('--headless')

driver = webdriver.Chrome(service=ChromService(ChromeDriverManager().install()), options=options)

# 1. 네이버 접속
driver.get('http://www.naver.com')

# 2. 검색창에 입력
search_box = driver.find_element(By.NAME, 'query')
search_box.send_keys("Python programming")
search_box.submit()

# 3. 검색 결과가 로드될 때까지 대기
time.sleep(3)

# 4. 페이지 소스를 BeautifulSoup으로 파싱
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')

# 5. 도서 영역 추출
books_div = soup.select_one('#main_pack > section.sc_new.sp_nbook._prs_bok_lst._slog_visible > div.api_subject_bx._nshopping_book_pc > div.book_list_wrap._book_content_root > div > ul')

# 예외 처리: books_div가 None일 수 있음
my_book_list = []

if books_div:
    a_tags = books_div.select("a.item_title")
    for book in a_tags:
        title = book.text.strip()
        link = book.get("href")
        my_book_list.append([title, link])
else:
    print("도서 정보를 찾을 수 없습니다.")

# 6. 결과 출력 및 저장
print(my_book_list)

with open("naver_books.csv", mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(['제목', '링크'])
    writer.writerows(my_book_list)

driver.quit()
