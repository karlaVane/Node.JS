// setTimeout(() => {
//     console.log("Hola, muchach@s!");
// }, 3000);

//CALLBACKS: Funciones que se ejecutan despues de q algo sucede
let getUsuarioById = (id, nickname, callback) => {
    let n = nickname + " perez"
    let usuario = {
        nombre: n,
        id //sera igual a la mas cercana del código
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe!`);
    } else {
        callback(null, usuario, 25); //null: es porq no hay error
    }
}

/*
id:10
nickname: pepito
err, usuario, edad : callback
*/
getUsuarioById(10, 'pepito', (err, usuario, edad) => {
    if (err) {
        return console.log(err);
    }
    console.log("Usuario de la BD:", usuario, `edad: ${edad}`);
});