const GAME_SPEED = 10;    //화면 갱신 주기
const BLOCK_SIZE = 20;

let snake = { x : 0, y : 0, directionX : 1, directionY : 0,};
let apple = {  a: Math.floor(Math.random() * (snakeCanvas.width / BLOCK_SIZE)) * BLOCK_SIZE,
               b: Math.floor(Math.random() * (snakeCanvas.height / BLOCK_SIZE)) * BLOCK_SIZE};
// DOM과 각종 필요한 여러 컴포넌트 로딩이 끝난 이후 실행

window.onload = initialize;


function initialize(){
    canvas = document.getElementById('snakeCanvas');
    context = canvas.getContext('2d');
    
    // 키 이벤트 리스터
    setupEventListers();

    // 게임 시작 루프 호출
    setInterval(gameLoop, GAME_SPEED);


}
// 키보드 인터럽트(이벤트) 핸들러

function setupEventListers(){
    
}

function handleKeyDown(e){
    // 키 좌우에 따라서 directionX를 적절하게 변경
    switch(e.key){
        case 'ArrowLeft' :
            snake.directionX = -1;
            snake.directionY = 0;
            break;
        case 'ArrowRight' :
            snake.directionX = 1;
            snake.directionY = 0;
            break;
        case 'ArrowUp' :
            snake.directionY = -1;
            snake.directionX = 0;
            break;
        case 'ArrowDown' :
            snake.directionY = 1;
            snake.directionX = 0;
        }
    }
    
document.addEventListener('keydown',handleKeyDown)

function gameLoop(){
    // 뱀 이동
    moveSnake();

    // 화면 렌더링
    draw();
}

//뱀의 위치 이동
function moveSnake(){
    snake.x += snake.directionX;
    snake.y += snake.directionY;
    if(snake.x > snakeCanvas.width - BLOCK_SIZE){
        snake.x = snakeCanvas.width - BLOCK_SIZE;
        snake.x = 0;
    }

    if(snake.y > snakeCanvas.width - BLOCK_SIZE){
        snake.y = snakeCanvas.width - BLOCK_SIZE;
        snake.y = 0;
    }


    
}

// 화면에 뱀을 그린다
function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'blue';
    context.fillRect(snake.x, snake.y, BLOCK_SIZE, BLOCK_SIZE);

    context.fillStyle = 'red';
    context.fillRect(apple.a, apple.b, BLOCK_SIZE, BLOCK_SIZE);
}
