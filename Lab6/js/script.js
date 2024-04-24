document.addEventListener("DOMContentLoaded", function () {
    const timeLeftElement = document.getElementById("time");
    const step = document.getElementById("step");
    let gameOver = false;
    let steps = 0;
    let sec = 0;
    let min = 0;
    let timer;
    let target;
    document.getElementById("startButton").addEventListener("click", request);
    document.getElementById("restartButton").addEventListener("click", restart);

    function restart() {
        clearInterval(timer);
        document.getElementById("modalArea").style.display = "none";
        document.getElementById("modalText").innerHTML = "<p>You won!</p>";
        document.getElementById("gamezone").innerHTML = "";
        timeLeftElement.textContent = "0:00";
        step.textContent = 0;
        gameOver = false;
        steps = 0;
        sec = 0;
        min = 0;
        request();
    }

    function request() {
        const rqst = new XMLHttpRequest();
        rqst.onreadystatechange = function () {
            if (rqst.readyState == XMLHttpRequest.DONE) {
                if (rqst.status == 200) {
                    const response = JSON.parse(rqst.responseText);
                    const randomIndex = Math.floor(Math.random() * response.length);
                    tiles = response[randomIndex].table;
                    target = response[randomIndex].target;
                    Start(tiles, target);
                } else
                    console.error("Request failed with status:", rqst.status);
            }
        }
        rqst.open("GET", "data/data.json", true);
        rqst.send();
    }

    function Start(tiles, target) {
        document.getElementById("startButton").style.display = "none";
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
                    step.textContent = steps;
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
                timeLeftElement.textContent = min + ":0" + sec;
            else
                timeLeftElement.textContent = min + ":" + sec;

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
