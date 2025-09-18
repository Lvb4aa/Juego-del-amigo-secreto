// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigues = [];

function agregarAmigue(nombre) {
    if (!nombre) {
        alert("no hay nombre añadido");
        return;
    }
    if (amigues.includes(nombre)) {
        alert("El nombre ya fue añadido");
        return;
    }
    amigues.push(nombre);
    console.group("lista de amigos (secreta)", amigues);
    console.groupEnd();
    actualizarLista();
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigues");
    //no mostramos los nombres en pantalla para mantener el secreto
    //en vez de mostrar nombres, mostraremos cantidad de amigues
    lista.innerHTML = `Participantes añadides: ${amigues.length}`;
}
function sortearAmigue() {
    if (amigues.length === 0) {
        alert("No hay amigues para sortear");
        return;
    }

    // elegir índice aleatorio
    const indice = Math.floor(Math.random() * amigues.length);

    // extraer Y eliminar el nombre sorteado en un paso
    const amigueSecreto = amigues.splice(indice, 1)[0];

    // mostrar resultado en pantalla y en consola (la lista sigue siendo "secreta" en pantalla)
    console.log("Amigue secreto sorteade es:", amigueSecreto);
    console.log("Lista restante (secreta):", amigues);

    document.getElementById("resultado").innerText = `El amigue secreto es: ${amigueSecreto}`;

    // actualizar contador/indicador en la UI
    actualizarLista();

    // deshabilitar botón de sorteo si ya no quedan participantes
    const btnSortear = document.getElementById("btnSortear");
    if (btnSortear && amigues.length === 0) btnSortear.setAttribute("disabled", "true");
}
document.getElementById("amigue").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let nombre = event.target.value.trim();
        agregarAmigue(nombre);
        event.target.value = ""; // Limpiar el campo de entrada
    }
});
