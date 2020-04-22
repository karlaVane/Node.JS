/*Creación de objetos como simulación 
de una base de datos */
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

//recibe como parametro id y un callback
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    //find: busca dentro del objeto empleados
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`); //Define error
    } else {
        callback(null, empleadoDB); //null: es el error q no existe
    }
}

//recibe como parámetro nombre de un empleado y un callback
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
        //find: buscar dentro del objeto salario y compara el id del objeto salario
        //con el id de empleado
    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`) //En caso de error
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
            /*
            Retorna un objeto
            null: no existe error
            obtiene el nombre y el salario de los objetos con igual id.
            */
    }
}

/*
3: id (parámetro de la función getEmpleado)
err,empleado: callback de la función getEmpleado

*/
getEmpleado(10, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
        //respuesta.nombre-> porque retorna un objeto
    })
});