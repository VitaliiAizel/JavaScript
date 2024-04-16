document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("startButton").addEventListener("click", Start);

    function Start() {
        $ajaxUtils.sendGetRequest("data/data.json",
            function (result) {
                let min = result.min;
                let tiles = result.table;
            });
    }
}
);