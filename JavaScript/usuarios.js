// Variables
let iframe = document.getElementById('frame');
let link = document.getElementById("link_1");
let registro = document.getElementById("registrar");
let buscador = document.getElementById("buscador");
let entradas = document.getElementById("inputs");
let tabla = document.getElementById("tabla-frame");
let menu = document.getElementById("menu");
let salida = document.getElementById("off");
let sales = document.getElementById("ventas");
let productos = document.getElementById("productos");
let ruta_usuario = "usuarios-info.html";
let ruta_registro = "usuarios-registro.html";

// Event listeners
registro.addEventListener("click", registrar);
link.addEventListener("click", linkear);
buscador.addEventListener("click", mantainSecond);
menu.addEventListener("click", mantain);
productos.addEventListener("click", changePage);
ventas.addEventListener("click", changePageVenta);


// Funciones
function linkear() {
  iframe.setAttribute("src", ruta_usuario);
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
  productos.setAttribute('href', './productos.html');
}

function changePageVenta() {
    ventas.setAttribute('href', './sales.html');
  }