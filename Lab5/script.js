document.addEventListener("DOMContentLoaded", function () {
    const difficultySelect = document.getElementById("difficulty");
    const timeLeftElement = document.getElementById("time-left");
    const scoreElement = document.getElementById("score-value");
    const colorSelect = document.getElementById("color");
    const square = document.getElementById("square");

    let timeLeft;
    let timer;
    let score;

    document.getElementById("startButton").addEventListener("click", Start);

    function Start() {
        document.getElementById('start-page').style.display = 'none';
        document.getElementById('game-page').style.display = 'block';

        const difficultyTimeMap = {
            easy: 5,
            medium: 3,
            hard: 2
        };

        square.style.height = (70 - 20 * ["easy", "medium", "hard"].indexOf(difficultySelect.value)) + "px";
        square.style.width = (70 - 20 * ["easy", "medium", "hard"].indexOf(difficultySelect.value)) + "px";
        square.style.backgroundColor = colorSelect.value;

        timeLeft = difficultyTimeMap[difficultySelect.value];
        score = 0;

        timer = setInterval(() => {
            timeLeft = (1, timeLeft - 0.1).toFixed(1);
            updateTimer();
            if (timeLeft <= 0) endGame();
        }, 100);

        square.addEventListener("click", function () {
            handleTargetClick(difficultyTimeMap[difficultySelect.value]);
        });

        moveTarget();
        updateTimer();
        updateScore();
    }

    function handleTargetClick(resetTime) {
        score++;
        timeLeft = resetTime;
        updateScore();
        moveTarget();
    }

    function moveTarget() {
        let distanceCoef = ["hard", "medium", "easy"].indexOf(difficultySelect.value) + 1;
        if (square.style.left === '') {
            square.style.left = 0 + "px";
            square.style.top = 0 + "px";
        }

        const maxX = window.innerWidth - square.offsetWidth;
        const maxY = window.innerHeight - square.offsetHeight;
        const rangeX = maxX / distanceCoef;
        const rangeY = maxY / distanceCoef;
        let randX = Math.floor(Math.random() * rangeX) + (parseInt(square.style.left) - parseInt(square.style.left) / distanceCoef);
        let randY = Math.floor(Math.random() * rangeY) + (parseInt(square.style.top) - parseInt(square.style.top) / distanceCoef);

        square.style.left = randX + "px";
        square.style.top = randY + "px";
    }

    function updateTimer() {
        timeLeftElement.textContent = timeLeft;
    }

    function updateScore() {
        scoreElement.textContent = score;
    }

    function endGame() {
        clearInterval(timer);
        document.getElementById('game-page').style.display = 'none';
        document.getElementById('modal').style.display = 'block';

        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML += `<p>Punktzahl: ${score}</p>`;
    }
});
