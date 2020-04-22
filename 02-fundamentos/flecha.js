// Forma habitual
// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b; //Función flecha
// cuando se tiene una sola acción no es necesario poner {}
console.log(`la suma de 3 + 4 = ${sumar(3,4)}`);

function saludar() {
    return "Hola chic@s";
} //Forma habitual
let saludar1 = () => "Hola chicos";
console.log(`${saludar1()}`); //Función flecha

//Recibiendo parámetros
let saludar2 = (recibirNombre) => `hola ${recibirNombre}`;
console.log(`${saludar2('Karlita xD')}`); //Recibe el nombre karlita

let saludo = () => { //En cso de tener mas de una linea poner {}
    let a = "Rodrigo";
    let b = 'Chicos';
    return `${a} ${b}`;
}
console.log(`${saludo()}`);

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido} -poder ${deadpool.poder}`
        //funcion flecha dentro de un objeto ->el this deja de funcionar 
}
console.log(deadpool.getNombre());