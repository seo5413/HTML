// 별다른 말이 없으면 commonjs 방식

const fs = require('fs');

// function myCallbackFunction(err,data){
//     if(err){
//         console.error('에러가 있음',err);
//     }else{
//         console.log('에러가 없음',data);
//     }
// }

console.log('파일읽기전');

fs.readFile('example.txt','utf8',(err,data) => {
    if(err){
        console.error('에러가 있음',err);
    }else{
        console.log('에러가 없음',data);
    }
});

console.log('파일읽은후');
