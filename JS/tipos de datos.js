// tipos de datos
//1.undefined

let cliente;
console.log('el cliente es:$(cliente');
console.log('el tipo de dato de la variable cliente es :$(typeof(cliente))');

cliente="giovany"
console.log('el tipo de dato  de clientes es ',typeof(cliente));
cliente="230314"
console.log('el tipo de la varible  de clientes es ',typeof(cliente));

//2. boolean
console.warn("---Tipo de dato dato :BOOLEAN (booleano -true /false ");
let esPremium="no lo se ";
console.log (`el tipo de dato de la variable espremium es :${typeof(esPremium)}`);
console.log(`el cliente es premium:${esPremium}`);
console.log('asignando el valor true de la variable ');
esPremium=true
console.log (`el tipo de dato de la variable espremium es ${typeof(esPremium)}`);

console.log("el cliente es premium:");
console.log("cambaindo el valor de esPremiun a false ");
esPremium=false

if(esPremium)
    console.log("el cliente pago por usar el srvicio");
else
console.log("el cliente que recibe los servicios gratuitos");

//3.number
var cantidad;
const costo_producto=10.50;
let saldo_cuenta =-2500.40
let monto_transaccion;
console.warn("---tipo de dato number");
console.log(`tu saldo al dia de hoy es ${saldo_cuenta},(tipo de dato=${typeof(saldo_cuenta)})`);
console.log(`el producto que has seleccionado cuesta:${costo_producto}`);
cantidad=8;
console.log(`has elegido comprar ${cantidad}de productos`);
console.log(`el importe total de la compra es ${(cantidad *costo_producto)}`);
saldo_cuenta=saldo_cuenta -(cantidad *costo_producto);
console.log(`tu nuevo saldo es de:${saldo_cuenta}`);

//el cilente realiza un abono de 1500
saldo_cuenta=
console.log(`despues del abono ,tu saldo es de :${saldo_cuenta}`);