const ROWS = 5;

function leftTriangle() {
    let currentRow = 1;
    while (currentRow <= ROWS) {
        let stars = "";
        let starCount = 1;
        while (starCount <= currentRow) {
            stars += "*";
            starCount++;
        }
        console.log(stars);
        currentRow++;
    }
}
leftTriangle();


function leftInterveredTriangle() {
    let currentRow = 1;
    while (currentRow <= ROWS) {
        let stars = "";
        let starCount = 5;
        while (starCount >= currentRow) {
            stars += "*";
            starCount--;
        }
        console.log(stars);
        currentRow++;
    }
}

leftInterveredTriangle();

function rightTriangle() {
    let currentRow = 1;
    while (currentRow <= ROWS) {
        let spaces = "";
        let stars = "";

        let spaceCount = ROWS - currentRow;
        while (spaceCount > 0) {
            spaces += " ";
            spaceCount--;
        }

        let starCount = 1;
        while (starCount <= currentRow) {
            stars += "*";
            starCount++;
        }

        console.log(spaces + stars);
        currentRow++;
    }
}
rightTriangle();


