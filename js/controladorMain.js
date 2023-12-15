let seccionActiva = false;

let seccionLogin = document.querySelector("#login");
let seccionCrearCuenta = document.querySelector("#crearCuenta");
let seccionInvestigador = document.querySelector("#investigador");

let formularioIniciarSesion = document.querySelector("#login form");
let botonCrearCuenta = document.querySelector("#botonCrearCuenta");

let divCrearProyecto = document.querySelector("#crearProyecto");
let divSubirArchivo = document.querySelector("#subirArchivo");

let liOpcionCrearProyecto = document.querySelector("#liOpcionCrearProyecto");
let liOpcionSubirArchivo = document.querySelector("#liOpcionSubirArchivo");
let opcionCrearProyecto = document.querySelector("#opcionCrearProyecto");
let opcionSubirArchivo = document.querySelector("#opcionSubirArchivo");
let botonCerrarSesion = document.querySelector("#botonCerrarSesion");

let formularioCrearProyecto = document.querySelector("#formularioCrearProyecto");
let opcionSeleccionarArchivo = document.querySelector("#seleccionarArchivo");
let botonSubirArchivo = document.querySelector("#botonSubirArchivo");

main();

function desplegarLogin() {
    ocultarCrearCuenta();
    ocultarInvestigador();

    seccionLogin.style.visibility = "visible";
}

function desplegarCrearCuenta(e) {
    ocultarLogin();
    ocultarInvestigador();

    seccionCrearCuenta.style.visibility = "visible";
}

function desplegarInvestigador(e) {
    e.preventDefault();
    ocultarLogin();
    ocultarCrearCuenta();

    seccionActiva = true;
    seccionInvestigador.style.visibility = "visible";
}

function desplegarCrearProyecto(e) {
    liOpcionSubirArchivo.style.backgroundColor = "rgb(0, 61, 80)";
    liOpcionCrearProyecto.style.backgroundColor = "rgb(158, 15, 15)";
    ocultarSubirArchivo();

    divCrearProyecto.style.visibility = "visible";
}

function desplegarSubirArchivo(e) {
    liOpcionSubirArchivo.style.backgroundColor = "rgb(158, 15, 15)";
    liOpcionCrearProyecto.style.backgroundColor = "rgb(0, 61, 80)";
    ocultarCrearProyecto();

    divSubirArchivo.style.visibility = "visible";
}

function ocultarLogin() {
    seccionLogin.style.visibility = "hidden";
} 

function ocultarCrearCuenta() {
    seccionCrearCuenta.style.visibility = "hidden";
}

function ocultarInvestigador() {
    seccionInvestigador.style.visibility = "hidden";
}

function ocultarCrearProyecto() {
    divCrearProyecto.style.visibility = "hidden";
}

function ocultarSubirArchivo() {
    divSubirArchivo.style.visibility = "hidden";
}

function crearProyecto(e) {
    e.preventDefault();
}

function seleccionarArchivo(e) {

}

function subirArchivo(e) {

}

function cerrarSesion() {
    ocultarCrearProyecto();
    ocultarSubirArchivo();

    desplegarLogin();
}

function inicializarEventosInterfaz() {
    formularioIniciarSesion.addEventListener("submit",desplegarInvestigador);
    botonCrearCuenta.addEventListener("click",desplegarCrearCuenta);

    opcionCrearProyecto.addEventListener("click",desplegarCrearProyecto);
    opcionSubirArchivo.addEventListener("click",desplegarSubirArchivo);

    formularioCrearProyecto.addEventListener("submit",crearProyecto);
    opcionSeleccionarArchivo.addEventListener("click",seleccionarArchivo);
    botonSubirArchivo.addEventListener("click",subirArchivo);
    botonCerrarSesion.addEventListener("click",cerrarSesion);
}

function main() {
    inicializarEventosInterfaz();
    desplegarLogin();
}