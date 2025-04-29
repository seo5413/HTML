const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/api/login', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({email , password})
    });

    // TODO : 응답값 확인
    if(res.ok){ //res.status code == 200인걸 비교하거나 , res.ok가 true/false라서 이걸 비교하거나
        const data = await res.json();
        showFlash(data.message, 'success');
        setTimeout(() => {
            window.location.href = '/index.html'
        }, 1000);
    }else{
        const data = await res.json();
        showFlash(data.error,'danger');
        setTimeout(() => {
            window.location.href = '/login.html'
        }, 1000);
    }

});

function showFlash(message, type='success'){
    const flashDiv = document.getElementById('flash-message');
    flashDiv.innerHTML = `
            <li class="${type}">${message}</li>
    `;

};

async function logout(){
    const res = await fetch('/api/logout', {method : 'POST'});
    const data = await res.json();
    alert(data.message)
};