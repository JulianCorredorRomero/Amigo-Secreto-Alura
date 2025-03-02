let numeroAmigos = [];
let LimiteAmigos = 10;

function AsignacionDeTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

AsignacionDeTexto('ul', 'Lista de Amigos');

function limpiarcaja() {
    document.getElementById('amigo').value = "";
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco antes y después

    if (nombre === "") {  // Solo se ejecuta si el input está vacío
        alert("Ingrese un nombre.");
        input.focus(); // Vuelve a enfocar el input para escribir
        return;
    }
    
    if (numeroAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        input.focus();
        return;
    }
    
    if (numeroAmigos.length >= LimiteAmigos) {
        alert("Has alcanzado el límite de amigos.");
        return;
    }

    // Agregar el nombre a la lista
    numeroAmigos.push(nombre);

    // Crear un nuevo <li>
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(nuevoElemento);

    // Limpiar input
    input.value = "";
    input.focus(); // Enfocar para que el usuario pueda escribir otro nombre
}

document.getElementById("agregar").addEventListener("click", agregarAmigo);

function mezclarArray(array) {
    let nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}

function sortearAmigo() {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpiar resultados anteriores

    if (numeroAmigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para el sorteo.');
        return;
    }

    let asignaciones = mezclarArray(numeroAmigos);
    while (asignaciones.some((persona, index) => persona === numeroAmigos[index])) {
        asignaciones = mezclarArray(numeroAmigos);
    }

    const indiceAleatorio = Math.floor(Math.random() * numeroAmigos.length);
    const amigoSecreto = asignaciones[indiceAleatorio];

    let li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}

document.getElementById("sortear").addEventListener("click", sortearAmigo);
