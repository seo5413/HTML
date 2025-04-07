function increameant(){
    // console.log("증가버튼클릭");
    var result = document.getElementById("result");
    console.log(result);

    //글자를 숫자로 변환하는 함수
    // parseInt
    result.innerText = Number(result.innerText)+ 1 ;
}
function decreameant(){
    // console.log("감소버튼클릭");
    var result = document.getElementById("result");
    console.log(result);
    result.innerText = Number(result.innerText)- 1 ;
    if(result=0){
        
    }
}
