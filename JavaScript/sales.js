// Variables
var label = document.getElementById("label-frame");
var iframe = document.getElementById('frame');
var link = document.getElementById("link_1");
var registro = document.getElementById("registrar");
var ruta_factura = "sales-info.html";
var ruta_registro = "sales-registro.html";

// Event listeners
link.addEventListener("click", linkear);
registro.addEventListener("click", registrar);

// Funciones
function linkear(){
  iframe.setAttribute("src", ruta_factura);
  label.innerHTML = "Información de venta";
  label.style.display="inherit";
}

function registrar(){
  iframe.setAttribute("src", ruta_registro);
  label.innerHTML = "Registrar/Editar factura";
  label.style.display="inherit";
}


