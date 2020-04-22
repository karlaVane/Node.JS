// Creación de objetos
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// Opcion 1:
console.log(deadpool.getNombre()); //Obtiene todas las propiedades
//extraer en variables externas los atributos del objeto deadpool
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

// Opción 2: Destructuracion de objetos
//Si se quiere cambiar el nombre de una variable, colocar :
//Y sera llamada con el nuevo nombre
let { nombre: primerNombre, apellido, poder } = deadpool; //para acceder fuera del objeto
console.log(`Con destructuración:  ${primerNombre} ${apellido} ${poder}`);