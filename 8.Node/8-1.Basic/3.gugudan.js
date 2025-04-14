// 구구단 완성
function gugudan(){
    for (x = 0 ; x <= 9 ; x++){
        for(y = 0 ; y <= 9 ; y++){
            console.log(`${x} x ${y} = ${x * y}`);
        }
    }
}

gugudan();