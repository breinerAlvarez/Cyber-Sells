// Variables
var label = document.getElementById("label-frame");
var iframe = document.getElementById('frame');
var link = document.getElementById("link_1");
var registro = document.getElementById("registrar");
var ruta_producto = "productos-info.html";
var ruta_registro = "productos-registro.html";

// Event listeners
link.addEventListener("click", linkear);
registro.addEventListener("click", registrar);

// Funciones
function linkear(){
  iframe.setAttribute("src", ruta_producto);
  label.innerHTML = "Información de producto";
  label.style.display="inherit";
}

function registrar(){
  iframe.setAttribute("src", ruta_registro);
  label.innerHTML = "Registrar/Editar producto";
  label.style.display="inherit";
}


