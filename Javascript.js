function saludar(){
    let nombre=prompt('Ingresa tu nombre');
    alert('Te damos la bienvenida '+nombre);
}
saludar();


let mensajeCompra = prompt('¿Deseas comprar alguno de nuestros productos? (Seleccione 1-Si / 2-No)');

while(mensajeCompra == 1 || mensajeCompra.toLowerCase('Si') == 'si'){
    let seleccionProducto = prompt('1-Tarjeta1\n2-Tarjeta2\n3-Tarjeta3\n4-Tarjeta4');
    if(seleccionProducto == '1' || seleccionProducto.toLowerCase('Tarjeta1') == 'tarjeta1'){
        alert('Se ha añadido Tarjeta 1 a tu carro de compras Precio: $5000');
    }else if (seleccionProducto == '2' || seleccionProducto.toLowerCase('Tarjeta2') == 'tarjeta2'){
        alert('Se ha añadido Tarjeta 2 a tu carro de compras Precio: $6000');
    }else if (seleccionProducto == '3' || seleccionProducto.toLowerCase('Tarjeta3') == 'tarjeta3'){
        alert('Se ha añadido Tarjeta 3 a tu carro de compras Precio: $9000');
    }else if (seleccionProducto == '4'|| seleccionProducto.toLowerCase('Tarjeta4') == 'tarjeta4'){
        alert('Se ha añadido Tarjeta 4 a tu carro de compras Precio: $15000');
    }else{
        alert('El numero de producto ingresado no es valido o no esta en stock')
    }
    mensajeCompra = prompt('¿Deseas comprar otro de nuestros productos? (Seleccione 1-Si / 2-No)');
}


let preguntaInicial = prompt('Danos tu puntuacion de nuestra pagina web (Siendo 1 el mas bajo y 10 el mas alto');

if (preguntaInicial <= 5){
    alert('Sentimos mucho que no hayas disfrutado de nuestra web, por favor ponte en contacto a travez del formulario para indicarnos que fue mal');
}else if(preguntaInicial > 5 && preguntaInicial <= 7){
    alert('Trataremos de mejorar la experiencia de los usuarios en base a los comentarios que recibamos, muchas gracias por tu opinion');
}else if(preguntaInicial > 7 && preguntaInicial <= 10){123
    alert('Nos complace poder ofrecer una buena experiencia a nuestros usuarios, muchas gracias por tu opinion.');
}else{
    alert('El valor ingresado no es valido.');
}
