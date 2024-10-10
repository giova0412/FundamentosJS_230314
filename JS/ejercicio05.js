//Ejercicio 5
const bg ="linear-gradient(11deg, rgba(3,0,6,5) 0%, rgba(7,7,131,1) 23%, rgba(0,912,155,3) 86%)";

const style_console=`background:${bg}; color: white;
border-radius: 6px; padding: 4px: font-size: 1.0rem; font-weight: bold`


console.warn ("--- Practica 07 Arreglos de JS ");

console.log("%c1.- Condicionales -Si/Entonces (IF)", style_console);
//let fechaActual= new Date(2024,7,5);
let fechaActual= new Date();
console.log(`HOLA, LA FECHA DE HOY ES ${fechaActual.toString()}`);
const fechaLocalMX = fechaActual.toLocaleString(`es-MX`, 
    {

        weekday : `long`,
        year: `numeric`,
        month: `numeric`,
        day : `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second:`numeric`,
        hou12: false
    }
);

console.log(`en formato local (Mexico): ${fechaLocalMX}`);

//si es antes de las doce saluda con un buenos dias 
if(fechaActual.getHours()<12){
    console.log(`Buenos dias; la fecha de hoy es: ${fechaActual}`);
}

//
if(fechaActual.getMonth()<=6){
    console.log(`Estas en la primera mitad del año `);
}
else{
    console.log(`Estas en la segunda mitad del año `);
}

//que pasa si la validacion tiene varias opcdiones 
let anio= fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtono = new Date(anio, 8, 21);
let inicioInvierno = new Date(anio, 11, 21);
let estacion;

let horarioVerano =false;

if ( fechaActual >=inicioPrimavera && fechaActual< inicioVerano){
    console.log(`Estamos en  Primavera .... `)
    console.log("Inicia la floracion de muchas plantas...")
    console.log("Los dias son mas largos y las noches mas cortas...")
    console.log("Muchos animales despiertan de la hibernacion..")
    estacion="Primavera"
    horarioVerano=true;
}
else if  ( fechaActual >=inicioVerano && fechaActual< inicioOtono){
    console.log(`Estamos en  Verano .... `)
    console.log("En esta tempoprada abundan los dias Soleados y calurosos ")
    console.log("En esta temporada el indice de turismo vacasional sube ...")
    console.log("Mucha gente busca realizar actividades al aire ...")
    estacion="Verano"
    horarioVerano=true;


}
else if  ( fechaActual >=inicioOtono && fechaActual< inicioInvierno){
    console.log(`Estamos en  Otoño .... `)
    console.log("Los arboles suele cambiar su follaje  ")
    console.log("Se registran temperaturas mas templadas  ...")
    console.log("Los animales comienzan con la recolleccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran")
    estacion="Otoño"
    horarioVerano=false;
}
else {
    console.log(`Estamos en  Invierno.... `)
    console.log("En esta temporada los dias son mas cortos y las noches mas largas  ")
    console.log("En algunas regiones suele NEVAR ...")
    console.log("Dado las bajas temperaturas, se recomeinda abrigarse ...")
    estacion="Invierno"
    horarioVerano=false;


}
console.log("%c2.- Operador Ternario (validacion:cumple:no_cumple" ,style_console);

//en java Script exista una operacion simplificada que valida si una conicion se cumple o no, y que en cada  caso 
const edadPersona=18;
const mayoriaDeEdadMX=18;
const myoriaEdadUS=21;
let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "eres mayor de edad ": "No eres mayor de edad "
console.log("Evaluando la mayoria de edad de ua persona ..")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoria de edad varuia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evalucion 

evaluarMayoriaEdad=(edad,pais)=>
    (edad>=18 && pais=== "MX")? `En ${pais} eres mayor de edad `: `En ${pais} NO eres mayor de edad `;

console.log("Evaluando la mayoria de edad de ua persona en Mexico..")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));
console.log("Evaluando la mayoria de edad de ua persona en Estados Unidos ..")
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.log("%c3.- SWITCH -CASE (eleccion por valor definido" ,style_console);

let asignaGeneracion=(anioNacimiento)=>{

switch(true)
{
    case (anioNacimiento<1968):
        return "Baby Boomers";
    
    case (anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generacion X";
    
    case (anioNacimiento>1980 && anioNacimiento <=1994):
        return "Milenials";
        
    case (anioNacimiento>1994 && anioNacimiento <=2010):
        return "centenials";
    
    case (anioNacimiento>2011 ):
        return "krystal ";
}

}
//esto hace que se comente y tambien
console.log(`Dado que nacio en el año 2005 soy de la generacion: ${asignaGeneracion(2005)}`);

console.log("%c4.- MANEJO DE EXCEPCIONES (try / catch))" ,style_console);

console.log("inettamos dividir :0/10, el resultado es:");
try{
    let result=0/10;
    console.log(result);
}catch(error){
    console.log("ocurrio un error"+error.message);
}
console.log("intentamos dividir :10/0 , el resultado es:");
try{
let result=10/0;
console.log(result);
}catch (error){
    console.log("ocurrio un error:"+error.message);
}

console.log("inettamos dividir : la variable a/0, el resultado es:");
try{
    let result=a/0;
    console.log(result);
}catch(error){
    console.log("ocurrio un error"+error.message);
}

console.log("inettamos dividir el valor de la variable x / entre el valor de y ,el resultado es");
try{
    let x=8, y=2, result=x/y;
    console.log(result);
}catch(error){
    console.log("ocurrio un error"+error.message);
}
console.log("%c5.- control de ciclos  (break / continue))" ,style_console);

console.log("vamos a contar del 1 al 10...-")
for (let num=1; num<=10; num++)
    console.log(num);

console.log ("ahora necesitamos que si llegas al 7 pares de contar ... suponiendo que solo por hoy es de ma la suerte")
for (num=1; num<=10; num++)
    if(num==7)
        break;
    else
    console.log(num);
console.log("ahora necesitamos que si llegas al 7 te saltes ese numero y continues ")
for (num=1 ; num<=10; num++)
{
    if(num==7)
    {
        continue;
    }
    console.log(num);
}
console.log("%c6.- ciclo iterativo- (for)" ,style_console);
console.log("los dias de la semana son en orden ascendente son:")
let dias =["domingo", "lunes","martes","miercoles","jueves","viernes","sabado"]
for (let i=0; i<dias.length;i++)
    console.log(dias[i])

console.log("ahora vamos a imprimir los meses en orden descendente...")
const meses=["enero","febero","marzo","abril","mayo","junio","julio","agosto","septiembre","obtubre","noviembre","diciembre",]
for(let i=11; i>=0; i--)
    console.log(meses[i]);


let finDEsemana=false;
let j=0;
let mensaje="";

while(j<dias.length){
    switch(j)
    {
        case 0:
            finDEsemana=true
            mensaje="Domingo Perezozo"
            break;
        case 1:
          finDEsemana=true
          mensaje="lunes de hueva"
          break; 
        case 2:
         finDEsemana=true
         mensaje="martes de frio"
         break;
         case 3:
         finDEsemana=true
         mensaje="miercolitros"
         break; 

         case 4:
         finDEsemana=true
         mensaje="juebebes"
         break;

         case 5:
        finDEsemana=true
         mensaje="beviernes"
         break; 

         case 6:
        finDEsemana=true
         mensaje="sabadrink"
        break;  

         
    }
    if(finDEsemana){
        console.log(`dia:${j} ${dias[j]}`)
        console.log(`Mensaje del dia ${mensaje}`)
    }
    j++;
}
console.log("%c8.- ciclo condicionales- que se ejecutan al menos una vez-(do while)" ,style_console);
let episodios=[
    "cap1:Camelot (Camelot)",
    "cap2:El sistema de plazas",
    "cap3:El Padrino",
    "cap4:¡Rafa, Rafa, Rafa!",
    "cap5:La conexión colombiana"
];
let indice=0;
let continuadorViendo=true;
do{
    console.log(`reproduciendo ${episodios[indice]}`);
    indice++;
    if(indice<episodios.length){
        continuadorViendo=confirm("deseas continuar con el siguiente cap?");
    }else{
        continuadorViendo=false;
    }

}while(continuadorViendo && indice<episodios.length);

console.log("Fin de la reproduccion");

console.log("%c9.- ciclo condicionales- que se ejecutan al menos una vez-(do while)" ,style_console);
let seriesTrending=[
    {nombre: "digimon tamers",temporadas:1,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "digimon true",temporadas:2,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "digimon xro wars",temporadas:1,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "pokemon xy",temporadas:5,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "lost canvas",temporadas:1,totalviews:"3.0M",tOtalReprods:"60M"}
];
for(let serie of seriesTrending){
    console.log(`series :${serie.nombre},temporadas:${serie.temporadas}`);
}
console.log("%c10.- ciclos para recorrer las propiedades de elementos finitos (for...in)" ,style_console);
for(let i in seriesTrending){
    console.log(`Serie${parseInt(i)+1}:`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}:${seriesTrending[i][propiedad]}`);
    }
    console.log(`--------------`)
}

console.log("%c11.- ciclos interrumpidos para cada uno de los  elemenetos del arreglo(FOR EACH)" ,style_console);
let seriesTrending2=[
    {nombre: "One piece ",temporadas:10,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "death note",temporadas:3,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "lost canvas",temporadas:2,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "bleach",temporadas:12,totalviews:"3.0M",tOtalReprods:"60M"},
    {nombre: "el chapo",temporadas:1,totalviews:"3.0M",tOtalReprods:"60M"}
];
seriesTrending2.forEach((serie,index)=>{
    let calificación = (serie.t0talReprods/serie.totalviews).toFixed(2);
    //Calcula la calificación y la redondea a 2 a decimales
    console.log(`Serie ${index+1}:`);
    console.log(`Nombre ${serie.nombre}:`);
    console.log(`Vistas ${serie.totalviews}:`)
    console.log(`Reproduciones ${serie.to}:`)
    console.log(`Calificacion ${calificación}:`)
    console.log(`---------------------`)
  }
  )
  
  let seriesDeseadas = ["lost canvas","bleach","One piece"];
  
  let seriesConTresTemporadas = seriesTrending2
      .filter(serie=> serie.temporadas <=3)//Filatramos las series que teienen 3 temporadas
      .map(serie=> serie.nombre)//Obtenemos solo los nombres de esas series estan en la lista de series deseadas
      .filter(nombre=> seriesDeseadas.includes(nombre));//Filtramos las que estan en la lista de series deseadas
  
  //Mostramos los resultados
  console.log("Series con 3 temporadas que estan en la lista deseada: ")
  console.log(seriesConTresTemporadas);
