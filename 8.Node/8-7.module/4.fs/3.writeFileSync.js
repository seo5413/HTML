// 별다른 말이 없으면 commonjs 방식

const fs = require('fs');

const data = "내가 쓰고 싶은 애용 아무거나 \n 두번쨰줄 \n 세번째줄줄"

console.log('파일읽기전');

fs.writeFileSync('example.txt', data,{encoding:'utf8', flag:'a'});

console.log('파일읽은후');      //위에 콜백이 비동기라서, 이게 먼저 출력됨
