let agregar = document.getElementById("agregar-producto");
const nombresSpace = document.getElementById("nombres");
const entradasSpace = document.getElementById("entradas");

agregar.addEventListener("click", agregarProducto);

function agregarProducto(){
    const pProducto = document.createElement("p");
    const inputProducto = document.createElement("input");
    const nodeProducto = document.createTextNode("Producto");
    pProducto.appendChild(nodeProducto);
    inputProducto.placeholder="Ej.: Jabón de baño";

    nombresSpace.appendChild(pProducto);
    entradasSpace.appendChild(inputProducto);

    const pCantidad = document.createElement("p");
    const inputCantidad = document.createElement("input");
    const nodeCantidad = document.createTextNode("Cantidad");
    pCantidad.appendChild(nodeCantidad);
    inputCantidad.placeholder="Ej.: 2";

    nombresSpace.appendChild(pCantidad);
    entradasSpace.appendChild(inputCantidad);

}