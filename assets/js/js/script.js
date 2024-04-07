
function cambiarColor(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}


const elem = document.getElementById("elem1");

// cambiar a color amarillo
const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", function() {
    cambiarColor(elem, 'yellow'); 
});

// Agregar evento para cambiar el color a negro 
elem.addEventListener('click', function(event) {
    cambiarColor(event.target, 'black'); 
});

// Agregar evento para crear un nuevo con tecla
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
