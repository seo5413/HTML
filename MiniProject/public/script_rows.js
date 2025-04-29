document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Savebtn').addEventListener('click', (e) => {
        e.preventDefault();
        uploadPost();
    });
});

async function uploadPost(){
    const title = document.getElementById('input-title').value;
    const text =  document.getElementById('input-text').value;

    const response = await fetch('/api/save' , {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({title,text})
    });

    const result = await response.json();
    console.log(result);
}

function Memo(){
    fetch('/api/memo', {
        method : 'GET',
    })
}
