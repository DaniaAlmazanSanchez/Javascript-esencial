"use strict"
//ciclos son estructuras de control para repetir un conjunto de acciones
//tipos: definidos e indefinidos
//indefinio- while y do while(no sabemos cuantas veces se va ejecutar)
//definido-for(iterador o repetición y se sabe cuantas veces se repetira)

//ciclo for
var contador = 5;
/*
for(let iterador = 0; iterador<contador; iterador++){
    console.log("el valor es : ",iterador);
    debugger;

}
//do while
do{
console.log(contador);
contador --;
}while(contador > 0);
*/
//while-primero evalua y luego ejecuta
while(contador > 0){
    document.write("finalizo",contador);
    contador --;
    debugger;
}