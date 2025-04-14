function add(a,b){

    return a + b;

}

// 뺼셈
function minus(a,b){
    return a-b;
}
// 곱셈
function multi(a,b){
    return a*b;
}
// 나눗셈
function div(a,b){
    if(a == 0 || b == 0){
        return 'xxxxx';
    }else{
        return a/b;
    }
}

// 출력
function printScreen(text) {
    console.log(text);
}


printScreen(add(5,7));
// 2-3
printScreen(minus(2,3));
// 2 * 3
printScreen(multi(2,3));
// 2 / 3
printScreen(div(2,3));
// 2 * 0
printScreen(multi(2,0));
// 2 / 0
printScreen(div(2,0));