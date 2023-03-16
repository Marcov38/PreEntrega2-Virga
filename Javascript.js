alert('Bienvenido a HiMyParty');

function comprarProducto() {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let subtotal = 0;
    let continuaCompra = false;


    do {
        alert('Los productos son:\n 1-Tarjeta1... precio:$5000\n 2-Tarjeta2... precio:$6000\n 3-Tarjeta3... precio:$10000\n 4-Tarjeta4... precio:$15000');
        producto = prompt('¿Que producto queres comprar? Indica solo el numero');
        cantidad = parseInt(prompt('¿Cuantas unidades vas a comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case '1':
                precio = 5000;
                break;
            case '2':
                precio = 6000;
                break;
            case '3':
                precio = 10000;
                break;
            case '4':
                precio = 15000;
                break;
            default:
                alert('Alguno de los datos no es correcto');
                precio = 0;
                cantidadValidada = 0;
                break;
        }


        subtotal += precio * cantidadValidada;

        continuaCompra = confirm('¿Desea seguir comprando?');

    } while (continuaCompra);

    return subtotal;
}

function validarCantidad(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Ingresa un valor correcto!');
        cantidad = parseInt(prompt('¿Cuantas unidades vas a comprar?'));
    }
    return cantidad;

}


function descuentoMayorista(cantidad) {
    if (cantidad >=10) {
        return subtotal * 0.90 // 10% de descuento
    }else if(cantidad >=20){
        return subtotal * 0.80 // 20% de descuento
    }else{
        return subtotal
    }
}

const subtotal = comprarProducto()

const subtotalMayorista = descuentoMayorista(subtotal)

console.log('El total de tu compra es $'+subtotalMayorista+' '+'Muchas gracias por tu compra!');

let preguntaInicial = prompt('Danos tu puntuacion de nuestra pagina web (Siendo 1 el mas bajo y 10 el mas alto');

if (preguntaInicial <= 5){
    alert('Sentimos mucho que no hayas disfrutado de nuestra web, por favor ponte en contacto a traves del formulario para indicarnos que fue mal');
}else if(preguntaInicial > 5 && preguntaInicial <= 7){
    alert('Trataremos de mejorar la experiencia de los usuarios en base a los comentarios que recibamos, muchas gracias por tu opinion');
}else if(preguntaInicial > 7 && preguntaInicial <= 10){123
    alert('Nos complace poder ofrecer una buena experiencia a nuestros usuarios, muchas gracias por tu opinion.');
}else{
    alert('El valor ingresado no es valido.');
}




