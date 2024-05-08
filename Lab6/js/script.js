document.addEventListener("DOMContentLoaded", function () {
    let initialRandomIndex;
    let gameOver;
    let target;
    let steps;
    let timer;
    let sec;
    let min;
    
    document.getElementById("startButton").addEventListener("click", startGame);
    document.getElementById("restartButton").addEventListener("click", restartGame);

    startGame();

    function startGame() {
        request(true);
    }

    function restartGame() {
        request(false);
    }

    function request(isInitial) {
        clearInterval(timer);
        document.getElementById("modalText").innerHTML = "<p>You won!</p>";
        document.getElementById("modalArea").style.display = "none";
        document.getElementById("time").textContent = "0:00";
        document.getElementById("gamezone").innerHTML = "";
        document.getElementById("step").textContent = 0;
        gameOver = false;
        steps = 0;
        sec = 0;
        min = 0;

        const rqst = new XMLHttpRequest();
        rqst.onreadystatechange = function () {
            if (rqst.readyState == XMLHttpRequest.DONE) {
                if (rqst.status == 200) {
                    const response = JSON.parse(rqst.responseText);

                    if (isInitial) initialRandomIndex = Math.floor(Math.random() * response.length);
                    tiles = response[initialRandomIndex].table;
                    target = response[initialRandomIndex].target;

                    Start(tiles, target);
                } else
                    console.error("Request failed with status:", rqst.status);
            }
        }
        rqst.open("GET", "data/data.json", true);
        rqst.send();
    }

    function Start(tiles, target) {
        document.getElementById("restartButton").style.display = "block";

        tableCreating(tiles, target);

        let tdElements = document.querySelectorAll("#gamezone td");
        tdElements.forEach(td => {
            td.addEventListener("click", function () {
                if (!gameOver) {
                    let id = td.id.split("").map(Number);
                    let allOff = true;
                    let i = id[0];
                    let j = id[1];

                    colorSwaping(td);

                    if (i > 0) colorSwaping(document.getElementById((i - 1) + "" + j));
                    if (i < tiles.length - 1) colorSwaping(document.getElementById((i + 1) + "" + j));

                    if (j > 0) colorSwaping(document.getElementById(i + "" + (j - 1)));
                    if (j < tiles[0].length - 1) colorSwaping(document.getElementById(i + "" + (j + 1)));

                    steps++;
                    document.getElementById("step").textContent = steps;
                    tdElements.forEach(td => {
                        if (!td.classList.contains("gray"))
                            allOff = false;
                    });

                    if (allOff) {
                        clearInterval(timer);
                        gameOver = true;
                        document.getElementById("modalArea").style.display = "block";
                        if (sec < 10)
                            document.getElementById("modalText").innerHTML += "<p>Steps: " + steps + "/" + target + "</p><p>Time: " + min + ":0" + sec + "</p>";
                        else
                            document.getElementById("modalText").innerHTML += "<p>Steps: " + steps + "/" + target + "</p><p>Time: " + min + ":" + sec + "</p>";
                    }
                }
            });
        });

        timer = setInterval(() => {
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
            }
            if (sec < 10)
                document.getElementById("time").textContent = min + ":0" + sec;
            else
                document.getElementById("time").textContent = min + ":" + sec;

        }, 1000);
    }
});

function tableCreating(tiles, target) {
    let html = "";
    for (let i = 0; i < tiles.length; i++) {
        html += "<tr>\n";
        for (let j = 0; j < tiles[i].length; j++) {
            if (tiles[i][j] == 0)
                html += '<td id="' + i + j + '" class="white"></td>\n';
            else
                html += '<td id="' + i + j + '" class="gray"></td>\n';
        }
        html += "</tr>\n";
    }
    document.getElementById("gamezone").innerHTML = html + "<br>";
    document.getElementById("stepsDisplay").style.display = "block";
    document.getElementById("timeDisplay").style.display = "block";
    document.getElementById("target").innerHTML = "Target: " + target;
}

function colorSwaping(element) {
    element.classList.toggle("white");
    element.classList.toggle("gray");
}
