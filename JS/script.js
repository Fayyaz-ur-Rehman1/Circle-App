let currentCirlce = null;

function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add('circle');
    circle.style.transform = 'translate(-50%, -50%)';
    const size = randomSize(10, 301);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;;
    circle.style.border = "solid white"
    circle.style.background = randomColor();
    document.body.appendChild(circle);
    return circle;
}
currentCirlce = createCircle();

document.addEventListener("click", (event) => {
    currentCirlce = createCircle();
    currentCirlce.style.top = event.clientY + "px";
    currentCirlce.style.left = event.clientX + "px";
})

document.addEventListener("mousemove", (event) => {
    currentCirlce.style.top = event.clientY + "px";
    currentCirlce.style.left = event.clientX + "px";
})

function randomColor() {
    const randomNum = Math.floor(Math.random() * 16777215);
    const ramdomCode = `#${randomNum.toString(16)}`;
    return ramdomCode;
}

function randomSize(min, max) {
    return Math.random() * (max - min) + min;
}