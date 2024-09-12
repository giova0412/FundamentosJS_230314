// comentarios

/*
comentario multi linea
*/

// EJERCICIO 01: descripcion de variables

// a) Var 
 var minombre= "Giovany, R"
 var misApellidos;
var miEdad=32;
 //EL Objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variables o resultado de una funcion o metodo

 console.log("Intentando leer las variables :",minombre, misApellidos);
 misApellidos="pazos cruz"
 console.log("ya que ambas fueron inicializadas vuelvo a intentar leerlas:",minombre,misApellidos);
 // Una variable puede cambiar en el proceso de ejecucion del programa.

 // b) const

 console.warn("--- declaricon de variables del tipo constante usando :CONST")
 const miUniversidad="UT Xicotepec";
 const miMatricula=230314
 console.log ("hola " ,minombre ,"", misApellidos,"se que estudias actualmente en:",miUniversidad,"asignaron la matricula :", miMatricula ,
    "y tienes una edad de :", miEdad,"años.");
    //una vez declaradas estas variables estas no pueden cambiar su valor
 

    //para saber el tipo de dato que tiene una variable o contante podemos utilizar la funcion typeof()
    console.log("analizando los datos puedo deducir que")
    console.log("mi nombre de del tipo:" ,typeof(minombre));
    console.log("mi universidad es del tipo:" ,typeof(miUniversidad));
    console.log("mi matricula es  del tipo:" ,typeof(miMatricula));
    console.log("mi edad es del tipo:" ,typeof(miEdad));
    

//c) let
let miFechaNacimiento ="2005-10-01";
let miColorFavorito;

console.warn("---Declaracion de variables de el tipo let");
console.warn("genial , te voy conociendo mejor, ahora se que tu naciste el: ", miFechaNacimiento, 
    "y tu color favorito es :mmmm dejame pensar....")
    miColorFavorito="rojo"
console.log('creo que es ${miColorFavorito}, le atine')// lA manera de mezclar textos fijos con el valor actual de las variables se le conoce como: interpolacion  y deben iniciar y finalizar on un backtic -tilde inversa
console.log("miColorFavorito es del tipo:" , typeof(miColorFavorito))
console.log("miFechaNacimiento es del tipo:" ,typeof(miFechaNacimiento))