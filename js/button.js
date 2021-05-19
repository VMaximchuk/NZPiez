var x = 0;

document.querySelector("#menuButton").onclick = function() {
    if (x === 0) {
        document.getElementById("headerPageMenu").style.display = "flex";
        document.body.style.overflowY = "hidden";
        x = 1;
    } else if (x === 1) {
        document.getElementById("headerPageMenu").style.display = "none";
        document.body.style.overflowY = "scroll";
        x = 0;
    }

}

var a = 0;

function keyPress(e) {
    let keyNum;
    var hist = document.getElementById("previewHistoryAll");
    if (window.event) {
        keyNum = window.event.keyCode;
    } else if (e) {
        keyNum = e.which;
    }
    console.log(keyNum);
    if (keyNum === 37) {
        a -= 10;
        document.getElementById("previewHistoryAll").style.left = "" + a + "px";
    }
    if (keyNum === 39) {
        a += 10;
        document.getElementById("previewHistoryAll").style.left = "" + a + "px";
    }
}



document.onkeydown = keyPress;