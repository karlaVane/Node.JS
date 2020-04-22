let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Karla Vanessa");
        }, 3000);
        // reject("Error al consultar el nombre"); ->cuando algo va mal
    });
}

//Await debe estar adentro del async
let saludo = async() => {
    let nombre = await getNombre(); // se guarda en una variable a la función getNombre con await
    return `hola ${nombre}`;
}
saludo().then(mensaje => {
    console.log(mensaje); //Imprime hola Karla Vanessa
}).catch(err => {
    console.log("Error en el Saludo:", err); //Imprime error-> El mensaje del reject
});