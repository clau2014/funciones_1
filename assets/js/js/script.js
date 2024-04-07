
function cambiarColor(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}


const elem = document.getElementById("elem1");


const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", function() {
    
    cambiarColor(elem, 'yellow');
});


elem.addEventListener('click', function(event) {
    cambiarColor(event.target, 'black');
});


document.addEventListener('keydown', function(event) {
    let color;
    switch (event.key) {
        case 'q':
            color = 'purple';
            break;
        case 'w':
            color = 'gray';
            break;
        case 'e':
            color = 'brown';
            break;
        default:
            return;
    }
    
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
});
