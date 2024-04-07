// Función para cambiar el color de fondo de un elemento
function cambiarColor(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Obtener el elemento con el ID "elem1"
const elem = document.getElementById("elem1");

// Obtener el elemento con el ID "clickMe" para cambiar a amarillo al hacer clic
const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", function() {
    cambiarColor(elem, 'yellow'); // Cambiar a amarillo al hacer clic en "clickMe"
});

// Agregar evento para cambiar el color a negro al hacer clic en "elem1"
elem.addEventListener('click', function(event) {
    cambiarColor(event.target, 'black'); // Cambiar a negro al hacer clic en "elem1"
});

// Agregar evento para crear un nuevo div con un color específico al presionar una tecla
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
    
    // Crear un nuevo div con el color especificado
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
});
