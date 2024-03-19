function pintar(color) {
    ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
pintar('green');
ele.addEventListener("click", function() {
    pintar('yellow');
});
