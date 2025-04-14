
try {
    const result = someVarialbeName * 2;
} catch (error) {
    console.error('오류 발생', error.message);
}

console.log('keep going');
// 참조 오류 예시시
try {
    const result = someVarialbeName * 2;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('참조 오류 발생', error.message);
    } else {
        console.log('그 외 다른 오류', error.message);
    }
}
// 문법 오류 예시시
try {
    eval("alert('Hello')");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('문법 오류', error.message);
    } else {
        console.log('그 외 오류', error.message);
    }

}

try {
    let arr = new Array(-1);
} catch (error) {
    if (error instanceof RangeError) {
        console.log('범위 오류', error.message);
    } else {
        console.log('그 외 오류', error.message);
    }
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') 
        throw new TypeError('숫자를 입력하세요');

    if(b === 0) {
        throw new Error('0으로 나눌 수 없습니다.')
    }
    return a / b;
}
try {
    result = (divide(5, 0));
} catch (error) {
    console.log('오류발생 : ', error.message);
}