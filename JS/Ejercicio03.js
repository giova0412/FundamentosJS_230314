

/// objetos


const producto1 = {
    Nombre: "tablet 9\"",
    Marca:"mac",
    Modelo:"ipad",
    Costo_Compra:11500.25,
    Costo_Venta:15400,
    disponible:true,
    SKU:Symbol("12345"),
    colores: ["blanco","negro","rosa","azul","amarillo"]



}
 console.log(producto1)
 console.table(producto1)

//acceder a las propiedades de un objeto
//Imprimir el objeto
console.warn("---Objetos---")
console.log(producto1);
//Los objetos tambien ya pueden representarse en formato de tabla utilizando la funcion console.log.table
console.table(producto1);
//Acceder a las propiedades de un objeto
console.warn("---Leyendo las Propiedades de un Objeto y sus tipos de dato")
console.log(`Nombre del producto${producto1.Nombre} que es del tipo de dato ${typeof(producto1.Nombre)}`);
console.log(`Nombre de la marca es ${producto1.Marca} que es del tipo de dato ${typeof(producto1.Marca)}`);
console.log(`El modelo del producto es${producto1.Modelo} que es del tipo de dato ${typeof(producto1.Modelo)}`);
console.log(`El precio del producto es${producto1.Costo_Compra} que es del tipo de dato ${typeof(producto1.Costo_Compra)}`);
console.log(`El costo del producto es${producto1.Costo_Compra} que es del tipo de dato ${typeof(producto1.Costo_Venta)}`);

//practica 5 02
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");


//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);

// Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre = "laptop gamer dell\"";
let Producto_Marca= "dell"
let Producto_Modelo= "cua 18"
let Producto_Precio= 20310.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-GHKOJKO09") 
let Producto_Stock = 20;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias= ["Electrónicos", "Mejor Valorados"];



console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disnponibidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Cateforias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));
     //ahora lo declaramos com un objeto
 
    let Producto =
    {
        Nombre: "iphone 13",
        Marca:"iphone",
        Modelo:"iphone",
        precio:10000.25,
        disponibilidad:false,
        SKU:"d07890lkpl" ,
        Imagen: "../ASSETS/iphone.jpg",
        barcode:null,
        categorias:["tecnologia"]
    }
    console.table(Producto)
    console.log("Accediendo a propiedades especificas del producto")
    console.log(`Nombre completo del producto ${Producto.Nombre}${Producto.Marca}${Producto.Modelo}`);
    console.log(`Precio: ${Producto.Precio}`)

   if(Producto.Disponibilidad == 0)
   console.log(`Estatus: Agotado`)
   else
   console.log(`Estatus: ${Producto.Stock} unidades disponibles.`)

  console.log("%c3.- Destructuración de Objetos", style_console);

 let Producto2=
 {
    id:2100,
    Clave: 316,
    Nombre: "Lentes de vista",
    Marca: "rayban",
    Modelo: "originals",
    Precio2: 7010.00,
    Disponibilidad: true,
    Stock: 2,
    SKU: "009481D-0356",
    Imagen: "../assets/lentes rayban.jpg",
    Barcode: 888392491626 ,
    Categorias: [ "Lentes", "salud", "Accesorios"]
}
let Comprador={
    id:5200,
    Clave: 3253,
    Nombre: "giovany",
    Apellidos: "pazos",
    Tipo: "mexa",
    Correo: "pazos@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 1.100000
}

let Pedido={
    id:8510,
    Producto_Id: 350,
    Comprador_clave: 3216,
    Cantidad: 4,
    Estatus: "Carrito de compra",
    TipoPago: "Tarjeta de Crédito"
}
// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2 } = Producto2; 
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra= Producto_Precio * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

//Actualizar el valor de los objetos
console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);

console.log(`El objeto tiene los siguientes valores:`)
console.log(JSON.stringify(Producto2,null,2));
//convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $78200 a $80000`)

//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2);

// Agregar nuevas propiedades a un objeto existente
console.log("%c5.- Agregación de Propiedades de un Objeto (MUTACIÓN)",style_console);
console.log("Objeto antes de ser modificado:")
console.table(Comprador)

// Agregando propiedades
Comprador['Direccion'] = "Av. 05 de Mayo #25, Interior 4A, Xicotepec de Juárez, Puebla, México"
Comprador['Tipo'] = "Premium";
Comprador['Estatus'] = "Inactivo"
Comprador['TotalCompras'] = 50000.00
console.log("Objetos despues de ser modificado")
console.table(Comprador)

//Eliminar propiedades de un objeto existente
console.log("%c6.- Eliminación de propiedades de un objeto (MUTACION)", style_console)
console.log("Objeto antes de ser modificado")

console.table(Pedido)
//Eliminamos la propiedad de Tipo de pedido
delete Pedido.TipoPago;
console.log("Objeto despues de ser modificado")
console.table(Pedido)

console.log("%c7.- Métodos para controlar la mutabilidad de los objetos, congelación (FREEZE)", style_console);

//Si deseamos permitir que los objetos 
console.log('La estructura actual del objeto comprador es: ');
console.table(Comprador)
Object.freeze(Comprador)

//Intentemos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra= "05/09/2024 10:15:25"
delete Comprador.Tipo
Comprador.Direccion = "Calle 16 de septiembre #102, col. Manantiales, Huauchinango, Puebla, México";
console.log('Verificamos sis e realizaron los cambios en el objeto Comprador: ')
console.table(Comprador)


console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
// Sin embargo, en el caso que desemos poder modificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
// Intentamos modificar su estructura
Pedido['FechaPedido'] = "25/09/2024 11:05:03"
delete Pedido['Cantidad']
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad = 5
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido);

// Operaciones sobre Objetos
// Unión de Objetos
console.log("%c9.- Métodos para contorlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);

// Destructuración de 2 o más objetos
console.log("%c10.- Desestructuración de 2 o más Objetos", style_console);
let {Precio: productoPrecio, SKU: productoSKU, Marca: productoMarca} = Producto
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador

// Transformar valores cuantitativos en cualitativos
if(productoPrecio>2000)
    productoPrecio = "Caro"
else
    productoPrecio = "Barato"

if (clienteSaldo>0)
    clienteSaldo="A favor"
else if (clienteSaldo<0)
    clienteSaldo="En contra"
else
    clienteSaldo="Sin deuda"

// Transformar valores cualitativos a cuantitativos

let clienteNivel

if(clienteTipo=="Premium")
    clienteNivel = 1
if (clienteTipo=="Free")
    clienteNivel = 2
if (clienteTipo=="No identificado")
    clienteNivel = 3


// Clasificamos al cliente por su País de Origen
if(clientePais=="México")
    clientePais= "Nacional"
else
    clientePais = "Extranjero"

// OLE - Object Literal Enhancement

let datosClientesPromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}

// El nuevo objeto que creamos sería un ejemplo de la información que enviariamos al area de Marketing  para la difusión de promociones
console.log("Los datos del cliente y sus hábitos de compra son: ")
console.table(datosClientesPromociones);
//
console.log("%c10.- Union de objetos usando el metodo de asignacion(ASSING)", style_console);

console.log("imprimimos la estructura y valores del objeto Producto")
console.table(Producto);


console.log("imprimimos la estructura y valores del objeto pedido")
console.table(Pedido);


let Producto3={...Producto}
const Venta=Object.assign(Producto3,Pedido);
console.log("consultamos este nuevo objeto venta")
console.table(Venta);
//
console.log("%c10.- union de objetos usando Spread OPERATOR", style_console);

console.table(Producto2);
console.table(Comprador);
console.table(Pedido);

let Venta2 =
{
    Producto:{...Producto2},
    Comprador:{...Comprador},
    Pedido:{...Pedido}
}
console.log("Fusiones a los 3 objetos en uno nuevo ,sin perdida de informacion")
console.log(Venta2)
console.table(Venta2);




//vamos a verificar el estatus de mutabilidad de objetos
console.log("")
console.log(``)
console.log(``)


//
const autenticado=true 
const usuario ="giovany"
//}
//console.table(nuevoObjeto)