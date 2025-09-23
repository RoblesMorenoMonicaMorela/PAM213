const persona={
    nombre: "Ivan Isay",
    edad: 37,
    direccion:{
        ciudad:"Qro",
        pais:"MX"
    }
}
console.log("2. Extrae los valores de nombre, edad y ciudad usando destructuración.");
const{nombre,edad,direccion}=persona;
console.log("Me llamo "+nombre+", tengo "+edad+" años y vivo en "+direccion.ciudad);