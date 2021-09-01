
const fnClase = () => {
const dateJS = new Date();
const añoActual = dateJS.getFullYear();

let nombre = prompt('Ingresa tu nombre: ');
let edad =   prompt('Ingresa tu edad: '); 

console.log(`Hola ${nombre} dentro de 10 años vas a tener ${(parseInt(edad))+10}`)
console.log(`Hola ${nombre} naciste en el año ${añoActual-(parseInt(edad))}`)}

