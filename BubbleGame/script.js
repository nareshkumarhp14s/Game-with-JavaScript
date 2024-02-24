var Timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {
    var Store = "";
    for (var i = 1; i <= 140; i++) {
        var randomNum = Math.floor(Math.random() * 10);
        Store += `<div id="bubble">${randomNum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = Store;
}
function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hitval").textContent = hitrn;
}
function runTimer() {
    var Timerint = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#timer").textContent = Timer;

        }
        else {
            clearInterval(Timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over <br> Score: ${score} </h1> 
            <ion-icon id="reloadButton" name="refresh-outline"></ion-icon>`;

            document.querySelector("#reloadButton").addEventListener("click", function () {
                reloadPage();
            });

        }

    }, 1000);

}
function increasseScore() {
    score += 10;
    document.querySelector("#Scoreval").textContent = score;
}
function reloadPage() {
    location.reload();
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum == hitrn) {
        increasseScore();
        makeBubble();
        getNewhit();
    }
});

getNewhit();
runTimer();
makeBubble();

