console.log('로딩완료');
async function loading(){
    // 1-1. 백엔드 요청 fetch
    const res = await fetch('/get-Items')
    const data = await res.json();
    // 1-2. 데이터 받아 res.
    console.log(data);
    const myContainer = document.getElementById('scroll-container');

    data.forEach((d) => {
        const item = document.createElement('div');
        item.textContent = d;
        item.classList.add('item');
        myContainer.appendChild(item);

    })  
    
    // 1-3. 화면에 렌더링링 dom.

}

document.addEventListener('DOMContentLoaded',()=>{

    loading();
});