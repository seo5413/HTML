document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById('login').addEventListener('click', (e) => {
        e.preventDefault();
        login();
    })
});

async function checkLoginStatus(){
    const response = await fetch('/api/check-login');
    if(response.status === 200){
        const data = await response.json();
        // console.log(data);
        showProfile(data.username);
    } else {
        const data = await response.json(); 
        console.log(data);
    }
}

async function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({username,password})
    });

    if(response.status === 200){
        const data = await response.json();
        // console.log(data);
        showProfile();
    } else{
        //로그인 실패
    }
}   

function showProfile(username){
    document.getElementById('profile').style.display='block';
    document.getElementById('loginformContainer').style.display = 'none';
    document.getElementById('username')
}