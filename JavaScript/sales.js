// Variables
let iframe = document.getElementById('frame');
let link = document.getElementById("link_1");
let registro = document.getElementById("registrar");
let buscador = document.getElementById("buscador");
let entradas = document.getElementById("inputs");
let tabla = document.getElementById("tabla-frame");
let menu = document.getElementById("menu");
let salida = document.getElementById("off");
let productos = document.getElementById("productos");
let usuarios = document.getElementById("usuarios");
let ruta_factura = "sales-info.html";
let ruta_registro = "sales-registro.html";

// Event listeners
registro.addEventListener("click", registrar);
link.addEventListener("click", linkear);
buscador.addEventListener("click", mantainSecond);
menu.addEventListener("click", mantain);
usuarios.addEventListener("click", changePageUsuarios);
productos.addEventListener("click", changePage);


// Funciones
function linkear() {
  iframe.setAttribute("src", ruta_factura);
}

function registrar() {
  iframe.setAttribute("src", ruta_registro);
}

function moverDown() {
  tabla.style.marginTop = "45px";
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
  productos.setAttribute('href', './productos.html');
}

function changePageUsuarios() {
  usuarios.setAttribute('href', './usuarios.html');
}