"use strict";
//estructura basica de una funcion
//funtion es un conunto de intrucciones para mandarlo llamar

function hola() {
  console.log("hola Dania");
}
hola();

//funtion con parametros

function person(name, age) {
  console.log(name);
  console.log(age);
  var resultado = name + " " + "is" + " " + age + " " + "years old";
  return resultado;
}
var message = person("Dania", 26);
console.log(message);

//funtion initialition

function number1(cost = 10) {
  console.log("the cost is:", cost);
}
number1(100);

//parameter Rest(...) recibe n cantidad de parametros
//agrupa un conjunto de elementos del resto

function ingredients(ingredient1, ...moreingredients) {
    console.log("ingrdiente 1: ", ingredient1);
    console.log("ingredientes ", moreingredients);
}
ingredients("pollo", "pechuga","manzana","azucar");

//parameter SPREAD- envia n cantidad de datos

function ingredientsDos(ingredient2,ingredient3, ...otros){//receives
    console.log("ingredient 1:", ingredient2);
    console.log("ingredient 3: ",ingredient3);
    console.log("otros: " , otros)
}
var array = ["pescado","uvas","limon"];
//..send
ingredientsDos(...array,"uvas","aguacate");

//funtion anonima
/*
(
    function(){
    var mensaje = "hola Dania";
    console.log(mensaje);
    }
)()*/

var saludo = function(name){
    var mensaje = "hola Dania" + name ;
    console.log(mensaje);
    return mensaje;
    
}

//callback
function operaciones(numero1, numero2, sumcb ){
var suma = numero1 + numero2;
var resta = numero1 - numero2;

sumcb(suma);
sumcb(resta);
}
operaciones(2,4,function(resultado){
console.log('suma', resultado)},
function(resultado){
    console.log('resta',resultado)

})

//funtion arrow
var numero4 = nombre => "Dania" + " " + nombre;
  console.log(numero4("Almazan"));

  //EJEMPLO 2 ARROW
  var suma = (dato1, dato2) => dato1 + dato2;
  console.log(suma(5,7));

  //this hace referencia al mismo onjeto
  const boton=document.querySelector('.boton-this');
  //funcion tradicional
  /*
  boton.addEventListener('click', function() {
    console.log(this.innerHTML);


  })
*/
boton.addEventListener('click', () =>  {
  console.log(this);


})


