"use strict"
//condicion if
var a = 110;
var b = 22;
var resultado = "sin dato";
if (a > b) {
    resultado = ("se cumplio");
}
console.log(resultado);

//condicion if else
var a = 110;
var b = 22;
var resultado = "sin dato";
if (a > b) {
    resultado = ("se cumplio");
} else {
    resultado = ("no se cumplio");

}
console.log(resultado);

// if else if
var a = 110;
var b = 22;
var resultado = "sin dato";
if (a > b) {
    resultado = ("se cumplio condicion 1");
} else if (b < a) {
    resultado = ("se cumplio condicion 2")
} else {
    resultado = ("no sse cumplio");
}
console.log(resultado);

//estructuras anidadas

var a = 110;
var b = 22;
var c = 3;
var resultado = "sin dato";
if (a > b) {
    resultado = ("se cumplio");
    if (a > c) {
        resultado = ("se cumplio estructura anidada");
    } else {
        resultado = ("no se cumple condicion anidada");
    }
} else {
    resultado = ("no se cumpio");
}
console.log(resultado);//se cumplio estructura anidad


//estructura switch
var edad = 22;
var res = "";
switch (edad) {
    case 22:
        res = "es correcto 22";
        break;
    case 23:
        res = " es correcto";
        break;
    default:
        res = " no esta correcto";
        break;

}
console.log = (res);

