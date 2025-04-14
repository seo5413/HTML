const stringNumber = "42";

console.log(stringNumber + 2);

const number = parseInt(stringNumber);

console.log(number + 2);

console.log(typeof stringNumber);
console.log(typeof number);

// 참고
const number2 = Number(stringNumber);
console.log(number2);
console.log(typeof number2);

const User = {
    name: 'Seo',
    age: 30
}

console.log(typeof User);

setTimeout(() =>{
    console.log('1초후에 출력됨')
}, 1000);

console.log('끝');

const timerId = setTimeout(() => {
    console.log('3초 후에 출력됨')
}, 3000);

console.log('진짜끝');
// console.log('타이머Id :', timerId);
clearTimeout(timerId);