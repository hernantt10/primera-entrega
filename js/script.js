let totalgeneral = 0;
contadordeproductos = 0;
listadodeproductos = '\nListado de productos:';
let productos = [];

function solicitarDatosUsuario(){
    let nombre = prompt('ingrese nombre');
    let apellido = prompt('ingrese su apellido');
    let genero; 
    let mensaje;

    let nombrecompleto = nombre + ' ' + apellido;

    while (true) {
        genero = prompt('Ingrese un "F" para femenino, "M" para masculino,"X" para otros').toLowerCase();
    switch (genero) {
        case "f":
            mensaje = "Bienvenida "+ nombrecompleto + '!';
            break;
        case "m":
            mensaje = "Bienvenido "+ nombrecompleto + '!';
            break;
        case "x":
            mensaje = "Bienvenidx "+ nombrecompleto + '!';
            break;
        default:
            alert("No ha ingresado un genero valido, vuelva a intertarlo.");
            continue;
    }
    break;
    }
    
    alert(mensaje);
}

function agregarProductos() {
    let confirmacion = confirm('¿Desea agregar un producto a su carrito de compras?');

    while (confirmacion) {
        introducirDatosProductos();
        confirmacion = confirm('¿Desea agregar otro producto a su carrito de compras?');
    }
    
    if (contadordeproductos > 0) {
        mostrarInfo();
        ordenarProductosPorNombre();
    }
}

function introducirDatosProductos() {

    nombre = prompt('Ingrese nombre del producto');
    precio = parseFloat(prompt('Ingrese precio del producto'));
    cantidad = parseInt(prompt('Ingrese cantidad de producto'));
    total = calcularTotal(precio,cantidad);
    contadordeproductos++;

    let producto = { nombre, precio, cantidad, total };
    productos.push(producto);

    console.log(producto);

    listadodeproductos +='\nproducto'+ contadordeproductos+ '| Nombre:'+ nombre + ' | Precios:'+ precio +' | Cantidad:'+ cantidad + ' | total: $'+ total;
        
}

function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    totalgeneral += total;
    return total;
}

function mostrarInfo() {
    listadodeproductos +='\nEl total a pagar de todos los productos es de $' + totalgeneral;
    alert(listadodeproductos);
    console.log(listadodeproductos);
 }

 function ordenarProductosPorNombre() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log('\nProductos ordenados por nombre:');
    console.log(productos);
}

solicitarDatosUsuario();
agregarProductos();
