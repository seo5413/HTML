// 별다른 말이 없으면 commonjs 방식

const fs = require('fs');

console.log('파일읽기전');

const data = "내가 파일에 쓰고 싶은 내용";

fs.writeFile('example.txt', data,{encoding:'utf8', flag:'a'},(err,data) => {
    if(err){
        console.error('에러가 있음',err);
    }else{
        console.log('에러가 없음, 쓰기 완료');
    }
});

console.log('파일읽은후');      //위에 콜백이 비동기라서, 이게 먼저 출력됨
