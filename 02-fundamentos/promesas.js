//creacion de objetos como simulacion de BD
let empleados = [{
        id: 1,
        nombre: "Sebastian"
    },
    {
        id: 2,
        nombre: "Karla"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];
let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = (id) => {
    /*Declarar el objeto promesa->compuesto por un callback
    tiene dos parametros: 
    resolve: cuando todo va bien
    reject: cuando existe un error
    */
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`); //error
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario }); //Todo va bien 
        }
    });
}

// PROMESAS EN CADENA
//.then() anidar promesas
//.cath() captura el error
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});