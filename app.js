let numeroAmigos = [];
let LimiteAmigos = 10;

function limpiarcaja() {
    document.getElementById('amigo').value = "";
}

function agregarAmigo() {
    let nuevoElemento = document.createElement("li");
    let primerIntento = true;
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validar que el nombre contenga solo letras, espacios y acentos
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!soloLetras.test(nombre)) {
        alert('Por favor, ingresa solo letras (puedes usar espacios y acentos)');
        return false;
    }
    
    if (numeroAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return false;
    }
    numeroAmigos.push(nombre);
    // Crear un nuevo <li>
    nuevoElemento.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(nuevoElemento);
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
