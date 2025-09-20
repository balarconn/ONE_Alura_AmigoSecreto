// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Código JavaScript de Bernardo
// Lista donde se almacenarán los nombres ingresados

const listaAmigos = [];

// Referencias a elementos del DOM
const inputNombre = document.getElementById("amigo");
const listaHTML = document.getElementById("lista-amigos");
const resultado = document.getElementById("resultado");

// Función para agregar un nombre a la lista
function adicionar() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Función para mostrar la lista actualizada en pantalla
function actualizarLista() {
    const ul = document.getElementById("lista-amigos");
    ul.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Función para realizar el sorteo 
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    if (listaAmigos.length === 1) {
        alert("Debe haber al menos 2 personas para realizar el sorteo.");
        return;
    }

    resultado.innerHTML = "";

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indice];

    const li = document.createElement("li");
    li.textContent = "🎁 El amigo secreto es: " + amigoSorteado;
    resultado.appendChild(li);
}