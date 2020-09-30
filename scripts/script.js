const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", randomBackgroundColor);

function randomBackgroundColor() {
    let red = getRandomNum(0, 255);
    let green = getRandomNum(0, 255);
    let blue = getRandomNum(0, 255);
    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${Math.random()})`;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomBackgroundColor();