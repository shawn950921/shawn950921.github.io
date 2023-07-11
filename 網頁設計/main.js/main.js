let count = 0;

function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".jpeg";
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("下載 (2)");
}
document.body.onmouseup = function () {
    changeImage("下載");
}