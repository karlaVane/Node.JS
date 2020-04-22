let nombre = "Deadpool";
let real = 'Wade Wilson';
/* La tilde invertida permite agregar texto junto 
con variables o funciones dentro de ${Variable} ${función} */
console.log("Normal: " + nombre + " " + real);
console.log(`Con template: ${nombre} ${real}`);

let nombreCompleto = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;
/*Para comprobar que hacen lo mismo
=== : Compara tanto la forma como el contenido
*/
console.log(nombreCompleto === nombreTemplate); //Devuelve un booleano

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre es: ${getNombre()}`);