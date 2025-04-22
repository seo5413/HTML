console.log('JS로딩');

document.getElementById('jsonSendBtn').addEventListener('click', async ()=>{
    const data = document.getElementById('jsonInput').value;
    const res = await fetch ('/submit-json', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : data
    });
    const reply = await res.json();
    console.log(JSON.stringify(reply));

    const output = document.getElementById('output');
    output.innerText = JSON.stringify(reply);
    // output.innerTetxt =  JSON.stringify(reply);    
});

// 버튼 클릭시 서버로 POST submit-form
document.getElementById('formSubmit').addEventListener('click' , async (e) =>{
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const age = document.getElementById('formAge').value;

    // const jsonData = {
    //     name : name,
    //     age : age
    // }

    // const res = await fetch('/submit-form', {
    //     method : 'POST',
    //     headers : {'Content-Type' : 'application/json'},
    //     body : JSON.stringify(jsonData)
    // });             

    const params = new URLSearchParams();
    params.append('name', name);
    params.append('age', age);
     const res = await fetch('/submit-form', {
        method : 'POST',
        headers : {'Content-Type' : 'application/x-www-form-urlencoded'},
        body : params.toString()
    });             
    console.log(params);
});

document.getElementById('textSendBtn').addEventListener('click', async () => {
    console.log('문자보내기버튼');
    const text = document.getElementById('textInput').value;
    
    const res = await fetch('/submit-text', {
        method : 'POST', 
        headers : {'Content-Type' : 'text/plain'},
    })
});