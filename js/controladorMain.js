let seccionActiva = false;

let seccionLogin = document.querySelector("#login");
let seccionCrearCuenta = document.querySelector("#crearCuenta");
let seccionInvestigador = document.querySelector("#investigador");

let botonCrearCuenta = document.querySelector("#botonCrearCuenta");

let divCrearProyecto = document.querySelector("#crearProyecto");
let divSubirArchivo = document.querySelector("#subirArchivo");

let liOpcionCrearProyecto = document.querySelector("#liOpcionCrearProyecto");
let liOpcionSubirArchivo = document.querySelector("#liOpcionSubirArchivo");
let opcionCrearProyecto = document.querySelector("#opcionCrearProyecto");
let opcionSubirArchivo = document.querySelector("#opcionSubirArchivo");
let botonCerrarSesion = document.querySelector("#botonCerrarSesion");

let opcionSeleccionarArchivo = document.querySelector("#seleccionarArchivo");
let botonSubirArchivo = document.querySelector("#botonSubirArchivo");

export function desplegarLogin() {
    ocultarCrearCuenta();
    ocultarInvestigador();

    seccionLogin.style.visibility = "visible";
}

export function desplegarCrearCuenta(e) {
    ocultarLogin();
    ocultarInvestigador();

    seccionCrearCuenta.style.visibility = "visible";
}

export function desplegarInvestigador() {
    ocultarLogin();
    ocultarCrearCuenta();

    seccionActiva = true;
    seccionInvestigador.style.visibility = "visible";
}

export function desplegarCrearProyecto(e) {
    liOpcionSubirArchivo.style.backgroundColor = "rgb(0, 61, 80)";
    liOpcionCrearProyecto.style.backgroundColor = "rgb(158, 15, 15)";
    ocultarSubirArchivo();

    divCrearProyecto.style.visibility = "visible";
}

export function desplegarSubirArchivo(e) {
    liOpcionSubirArchivo.style.backgroundColor = "rgb(158, 15, 15)";
    liOpcionCrearProyecto.style.backgroundColor = "rgb(0, 61, 80)";
    ocultarCrearProyecto();

    divSubirArchivo.style.visibility = "visible";
}

export function ocultarLogin() {
    seccionLogin.style.visibility = "hidden";
} 

export function ocultarCrearCuenta() {
    seccionCrearCuenta.style.visibility = "hidden";
}

export function ocultarInvestigador() {
    seccionInvestigador.style.visibility = "hidden";
}

export function ocultarCrearProyecto() {
    divCrearProyecto.style.visibility = "hidden";
}

export function ocultarSubirArchivo() {
    divSubirArchivo.style.visibility = "hidden";
}

export function crearProyecto(e) {
    e.preventDefault();
}

export function seleccionarArchivo(e) {

}

export function subirArchivo(e) {

}

export function cerrarSesion() {
    ocultarCrearProyecto();
    ocultarSubirArchivo();

    desplegarLogin();
}

export function inicializarEventosInterfaz() {
    botonCrearCuenta.addEventListener("click",desplegarCrearCuenta);

    opcionCrearProyecto.addEventListener("click",desplegarCrearProyecto);
    opcionSubirArchivo.addEventListener("click",desplegarSubirArchivo);

    opcionSeleccionarArchivo.addEventListener("click",seleccionarArchivo);
    botonSubirArchivo.addEventListener("click",subirArchivo);
    botonCerrarSesion.addEventListener("click",cerrarSesion);
}

export function main() {
    inicializarEventosInterfaz();
    desplegarLogin();
}