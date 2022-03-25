'use strict'

//operacioes aritmeticas
var a = 10;
var b = 7;
var suma = a + b;
console.log("la operacion e:" + a + '+' + b, suma);

var resta = a - b;
console.log("la operacion e:" + a + '-' + b, resta);

var div = a / b;
console.log("la operacion e:" + a + '/' + b, div);

var residuo = a % b;
console.log("la operacion e:" + a + '%' + b, residuo);

var decremento = a;
decremento--;

console.log("la operacion e:" + a + '--', decremento);

var incre = a;
incre++;
console.log("la operacion e:" + a + '++', incre);

// opeaciones relacionales
var a = 10;
var b = 20;
//menor que <
var menor = a < b;
console.log(a + " es menor que:" + b, menor);
//true
//mayor que
var mayor = a > b;
console.log(a + " es mayor que:" + b, mayor);
//false
var mayorigual = a >= b;
console.log(a + " es mayor igual que:" + b, mayorigual);
//false
var menorifgual = a <= b;
console.log(a + "es menor igual:" + b + menorifgual);
//true
var igual = a == b;

console.log(a + "es igual a" + b + igual);
//false
var diferenteigual = a != b;
console.log(a + "es difernte igual:" + b, diferenteigual);
//true

// operadore logicos

var a = 10;
var b = 20;

//and && abas deben cumplirse
var and = (a > 10 && b > 10);
//false

// or || almenos una de las dos condiciones debe ser correcta
var or = (a > 10 || b > 10);
//true

//not ! negar o cotrdesir
var not = !(a < 10);
//true

//numeos negativos
var a = 10;
var b = -a;
console.log(a + "pasa a ser" + b);

//operadores de concatenacion

//concatenacion de numeros
var a = 10;
var b = 12;
var cn = a + b;
console.log(cn);// 22
//concatenacion de cadenas de texto
var nom = "Dania";
var ape = "Almazan";
var cc = nom + " " + ape;
console.log(cc);// Dania Almazan
//concatenacion de numeros como texto
var num1 = "1";
var num2 = "2";
var cnt = num1 + num2;
console.log(cnt);//12

//concatenacion de texto y numero
var n = 1;
var n2 = "5";
var ctn = n + n2;
console.log(ctn);//15

//OPERRADOR TERNARIO
var a = 112;
var b = 22;

//condicion ? true : false;
var resultado = b < 23 ? alert("es menor") : "noson iguales";

var pi = Math.PI > 4 ? "SI" : "NO";