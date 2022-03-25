"use strict"

//cambio de valores

var nombre = "Dania";
var edad = 26;
var telefono = "123467777"

//number o parseInt-cambio de string a numero
var cambiotelefono1 = Number(telefono);
var cambiotelefono2 = parseInt(telefono);
//parseFloat-cambio de entero a flotante
var cambioedad1 = parseFloat(edad);
//String-cambio de entero a cadena
var cambioedad2 = String(edad);

//comillas dobles "" y simples ''
var materia1 = "Càlculo integral";
var materia2 = 'Estructura de datos';
//anidaciòn de comillas "''""
console.log("Mis materias del dia 'martes': ",materia1,"y",materia2); 

//variables booleanas
var estado = Boolean(100<20);

// fechas
//getDate-sirve para ver el dia en que me encuentro del mes
//getDay-sirve para saber en que dia de la semana me encuatro 1=lunes
//getHours()-saber la hora
//getDate()-sirve para ver la fecha
//setDate()-para identificar que fecha queremos fecha.setDate(10)
var fecha = new Date();
var diames = fecha.getDate();
console.log(diames);
//JSON -Javascript objet notation

var persona1 = {nombre:"Sandra",edad:29};
var personas = [{nombre:'Sandra', edad:34,
 nombre:'Lalo', edad:23},
persona1
]
//para enviar datos a algun servidor o guardarlo local convierte los datos a cadena
var perJSON = JSON.stringify(persona1);
//SE CONVIETE A OBJETO JSON
var guardar = JSON.parse(perJSON);
