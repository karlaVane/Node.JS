//objetos como simulacion de BD
let empleados = [{
        id: 1,
        nombre: "Sebas"
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

//transformado a un metodo async
/*
En lugar de crear una promesa se utiliza la palabra async
return en lugar de resolve
throw new Error en lugar de reject
*/
let getEmpleado = async(id) => {
    //return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        //reject(`No existe un empleado con id ${id}`);
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        //resolve(empleadoDB);
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    //return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        //reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        throw new Error(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salarioDB.salario };
    }
}


//async y await
//El await solo utilizar dentro del async
let getInformacion = async(id) => {
    let empleado = await (getEmpleado(id));
    let resp = await (getSalario(empleado));
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}

//Cuando hay solo una linea de codigo no poner llaves en el then
getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));