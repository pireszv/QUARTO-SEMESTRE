const character = document.getElementById("character");
const scoreSpan = document.getElementById("ScoreSpan");
const pauseMenu = document.getElementById("pauseMenu");
const pauseButton = document.getElementById("pauseButton");

let counter = 0;
let isJumping = false;
let gameInterval;
let obstacleInterval;
let isPaused = false;
let playerOffset = 0;

let blocks = [];

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const minHeight = 30;
const maxHeight = 100;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
    if (event.code === "ArrowRight") {
        moveRight();
    }
    if (event.code === "ArrowLeft") {
        moveLeft();
    }
    if (event.code === "Escape") {
        togglePause();
    }
});

pauseButton.addEventListener("click", togglePause);

function jump() {
    if (!isJumping && !isPaused) {
        isJumping = true;
        character.classList.add("animate");
        setTimeout(() => {
            character.classList.remove("animate");
            isJumping = false;
        }, 500);
    }
}

function moveRight() {
    if (!isPaused) {
        playerOffset += 20;
        character.style.left = (100 + playerOffset) + "px";
    }
}

function moveLeft() {
    if (!isPaused) {
        playerOffset -= 20;
        character.style.left = (100 + playerOffset) + "px";
    }
}

function togglePause() {
    if (isPaused) {
        resumeGame();
    } else {
        pauseGame();
    }
}

function pauseGame() {
    isPaused = true;
    clearInterval(gameInterval);
    clearInterval(obstacleInterval);
    blocks.forEach(block => block.style.animationPlayState = 'paused');
    pauseMenu.classList.remove("hidden");
}

function resumeGame() {
    isPaused = false;
    pauseMenu.classList.add("hidden");
    blocks.forEach(block => block.style.animation = `block 3s infinite linear`);
    startGame();
}

function restartGame() {
    clearInterval(gameInterval);
    clearInterval(obstacleInterval);

    counter = 0;
    scoreSpan.innerText = counter;
    playerOffset = 0; 
    character.style.left = "100px"; 

    blocks.forEach(block => block.remove());
    blocks = [];

    resumeGame(); 
}

function createObstacle() {
    const gameArea = document.getElementById('gameArea');

    const block = document.createElement("div");
    block.classList.add("block");
    block.style.position = "absolute";
    block.style.bottom = "0px";
    block.style.left = `${Math.random() * (gameArea.offsetWidth - 50)}px`;

    const characterHeight = parseInt(window.getComputedStyle(character).getPropertyValue("height"));

    const maxObstacleHeight = characterHeight;
    const minObstacleHeight = 20;

    const height = Math.floor(Math.random() * (maxObstacleHeight - minObstacleHeight + 1)) + minObstacleHeight;

    const color = colors[Math.floor(Math.random() * colors.length)];

    block.style.width = "50px"; 
    block.style.height = `${height}px`;
    block.style.backgroundColor = color;

    gameArea.appendChild(block);
    blocks.push(block);

    block.style.animation = `block 3s linear forwards`;

    setTimeout(() => {
        block.remove();
        blocks.splice(blocks.indexOf(block), 1);
    }, 3000);
}

function startGame() {
    createObstacle();
    gameInterval = setInterval(checkGame, 10);
    obstacleInterval = setInterval(createObstacle, 3000);
}

const checkGame = () => {
    if (isPaused) return;

    const characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    blocks.forEach((block) => {
        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        const blockHeight = parseInt(window.getComputedStyle(block).getPropertyValue("height"));

        
        if (
            blockLeft < characterLeft + 20 && 
            blockLeft + 50 > characterLeft &&
            characterBottom <= blockHeight
        ) {
            block.style.animation = "none";
            alert("Fim de Jogo. Pontuação: " + counter);
            restartGame();
        }

        
        if (blockLeft + 50 < characterLeft && !block.scored) {
            counter += 1;
            scoreSpan.innerText = counter;
            block.scored = true;
        }

        
        if (blockLeft + 50 < 0) {
        block.style.left = "-100px";
        }

    });
};

startGame();
