// Variables
let iframe = document.getElementById('frame');
let link = document.getElementById("link_1");
let registro = document.getElementById("registrar");
let buscador = document.getElementById("buscador");
let entradas = document.getElementById("inputs");
let tabla = document.getElementById("tabla-frame");
let salida = document.getElementById("off");
let menu = document.getElementById("menu");
let ruta_factura = "sales-info.html";
let ruta_registro = "sales-registro.html";


// Event listeners
registro.addEventListener("click", registrar);
link.addEventListener("click", linkear);
buscador.addEventListener("click", mantainSecond);
salida.addEventListener("click", salir);
menu.addEventListener("click", mantain);

// Funciones
function linkear(){
  iframe.setAttribute("src", ruta_factura);
}

function registrar(){
  iframe.setAttribute("src", ruta_registro);
}

function moverDown(){
    tabla.style.marginTop="45px";
}

function moverUp(){
  tabla.style.marginTop="12px";
}

function salir(){
  alert("saliendo :-)")
  salida.style.display="none";
}

function mantain(){
  salida.style.display="block";
}

function mantainSecond(){
  if(entradas.style.display=="block"){
    entradas.style.display="none"
    moverUp();
  }else{
    entradas.style.display ="block";
    moverDown();
  }
  
}