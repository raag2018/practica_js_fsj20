console.log("ok");
console.warn("alerta advertencia");
console.error("ha ocurrido un error");
let nombre = "pedro";
let p = document.getElementById("nombre");
p.innerHTML = nombre;
//variable de forma global
//var i = 18;

//console.log(`fuera del for ${i}`);
for (let i = 0; i < 2; i++) {
    console.log(`dentro del for ${i}`);
}
let i = 0;
i = 10;
//console.log(`fuera del for ${i}`);
if (i <= 10) {
    console.log("i es menor que 10");
} else {
    console.log("la variable i no es menor que 10");
}
//poder sacar los numeros pares
if ((i % 2) == 1) {
    console.log("i es impar");
} else {
    console.log("i es par");
}
//crear una tabla de multiplicar
for (let i = 1; i <= 10; i++) {
    console.log(`2 X ${i} = ${2*i}`);
}
// ese ejercicio como crees la seria imprimir la tabla del 1 al 10