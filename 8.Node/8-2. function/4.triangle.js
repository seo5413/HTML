const ROWS = 5;

function leftTriangle(){
    let currentRow = 1;
    while(currentRow <= ROWS){
        let stars = "";
        let starCount = 1;
        while(starCount <= currentRow){
            stars += "*";
            starCount++;
        }
        console.log(stars);
        currentRow++;
    }
}
leftTriangle();


function rightTriangle(){
    let currentRow = 5;
    while(currentRow >= ROWS){
        let stars +="*";
        
    }
}

rightTriangle();