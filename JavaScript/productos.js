// Variables
let iframe = document.getElementById('frame');
let link = document.getElementById("link_1");
let registro = document.getElementById("registrar");
let buscador = document.getElementById("buscador");
let entradas = document.getElementById("inputs");
let tabla = document.getElementById("tabla-frame");
let salida = document.getElementById("off");
let menu = document.getElementById("menu");
let ventas = document.getElementById("ventas");
let usuarios = document.getElementById("usuarios");
let ruta_producto = "productos-info.html";
let ruta_registro = "productos-registro.html";



// Event listeners
registro.addEventListener("click", registrar);
link.addEventListener("click", linkear);
buscador.addEventListener("click", mantainSecond);
salida.addEventListener("click", salir);
menu.addEventListener("click", mantain);
ventas.addEventListener("click", changePage);
usuarios.addEventListener("click", changePageUsuario);

// Funciones
function linkear() {
  iframe.setAttribute("src", ruta_producto);
}

function registrar() {
  iframe.setAttribute("src", ruta_registro);
}

function moverDown() {
  tabla.style.marginTop = "18px";
}

function moverUp() {
  tabla.style.marginTop = "12px";
}

function mantain() {
  if (salida.style.display == "block") {
    salida.style.display = "none"
  } else {
    salida.style.display = "block";
  }
}

function mantainSecond() {
  if (entradas.style.display == "block") {
    entradas.style.display = "none"
    moverUp();
  } else {
    entradas.style.display = "block";
    moverDown();
  }
}

function changePage() {
  ventas.setAttribute('href', './sales.html');
}

function changePageUsuario() {
  usuarios.setAttribute('href', './usuarios.html');
}