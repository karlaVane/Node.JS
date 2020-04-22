/* Cuando se utiliza let para una variable
no se puede volver a definir
a la misma variable.
*/

let nombre = "Wolverine";
if (true) {
    let nombre = "Magneto";
}
console.log(`hola ${nombre}`);
/*En el bloque anterior no da error 
porq los let funcionan por bloques*/

let i;
for (i = 0; i <= 5; i++) {
    console.log(`i = ${i}`);
}

console.log(`valor final de i: ${i}`);