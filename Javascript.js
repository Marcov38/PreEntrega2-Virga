function miCarritoDeCompras(){
    const productos = [
        { id: 1, nombre: "Tarjeta de cumpleaños 1", precio: 10000, },
        { id: 2, nombre: "Tarjeta de cumpleaños 2", precio: 20000, },
        { id: 3, nombre: "Tarjeta de cumpleaños 3", precio: 30000, },
        { id: 4, nombre: "Tarjeta de boda 1", precio: 30000, },
        { id: 5, nombre: "Tarjeta de boda 2", precio: 40000, },
        { id: 6, nombre: "Tarjeta de boda 3", precio: 45000, },
      ];
      
      function mostrarCatalogo() {
        let mensaje = "Bienvenidos al catalogo, por favor seleccione un producto:\n\n";
        let opciones = "";
        
        for (const producto of productos) {
          opciones += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
        }
      
        let idProducto = parseInt(prompt(`${mensaje}${opciones}\nIngrese el ID del producto deseado:`));
        let cantidad = parseInt(prompt("Ingrese la cantidad deseada:"));
      
        if (isNaN(cantidad) || cantidad <= 0) {
          alert("Cantidad inválida");
          return;
        }
      
        while (isNaN(idProducto) || idProducto <= 0 || idProducto > productos.length) {
          alert("Producto inválido");
          idProducto = parseInt(prompt(`${mensaje}${opciones}\nIngrese el ID del producto deseado:`));
        }
      
        const productoSeleccionado = productos.find((producto) => producto.id === idProducto);
      
        agregarAlCarrito(productoSeleccionado, cantidad);
      
        const continuarComprando = confirm("¿Desea seguir comprando o desea ver su carrito final?");
      
        if (continuarComprando) {
          mostrarCatalogo();
        } else {
          mostrarCarrito();
        }
      }
      
      
      function mostrarCarrito() {
        const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
      
        if (carrito.length /* A */=== 0) {
          alert("Su carrito está vacío");
          return;
        }
      
        let mensaje = "Su carrito contiene:\n\n";
      
        let total = 0;
      
        for (const item of carrito) {
          mensaje += `${item.producto.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}\n`;
          total += item.subtotal;
        }
      
        mensaje += `\nTotal: $${total}\n\n¿Desea confirmar la compra?`;
      
        const opcion = confirm(mensaje);
      
        if (opcion) {
      
          alert("¡Su compra ha sido realizada con éxito!");
        } else {
          sessionStorage.removeItem("carrito");
      
          alert("¡Gracias por su tiempo!");
        }
      }
      
      function agregarAlCarrito(producto, cantidad) {
        const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
      
        const itemExistente = carrito.find((item) => item.producto.id === producto.id);
      
        if (itemExistente) {
          itemExistente.cantidad += cantidad;
          itemExistente.subtotal = itemExistente.cantidad * itemExistente.precio;
        } else {
        carrito.push({
        producto,
        cantidad,
        subtotal: cantidad * producto.precio,
        });
        }
        
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        }
        
        function iniciar() {
        const opcion = confirm("Bienvenido a Hi My Party, ¿desea ver el catálogo de productos?");
        
        if (opcion) {
        mostrarCatalogo();
        } else {
        alert("¡Gracias por su tiempo!");
        }
        }
        
        window.onload = iniciar;
    
    }
    
    miCarritoDeCompras();




