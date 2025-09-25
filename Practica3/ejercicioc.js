function simularPeticionAPI (){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Datos recibidos correctamente");
        },5000);
    });
}

async function obtenerDatos() {
    try {
        const respuesta=await simularPeticionAPI();
        console.log("Resultado: ",respuesta);
    } catch (error) {
        console.error("Error al recibir los datos.");
    }   
}
obtenerDatos();