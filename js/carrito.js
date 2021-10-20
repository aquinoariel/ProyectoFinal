class carrito {
    constructor (nombreDeProducto, precio, talle){
        this.nombreDeProducto = nombreDeProducto.toLowerCase();
        this.precio = parseFloat(precio);
        this.talle = talle.toLowerCase();
        this.vendido = false;
    }

    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new carrito(`remera aquara`, 999, `talle S`));
productos.push(new carrito(`buzo aquara`, 1899, `talle M`));
productos.push(new carrito(`pantalon aquara`, 1600, `talle 40`));
productos.push(new carrito(`buzo KL`, 1799, `talle L`));

for(const carrito of productos)
carrito.sumaIva();
console.log(productos);
