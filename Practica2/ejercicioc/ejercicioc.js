const personas=[
    {nombre:"Ana", edad:22},
    {nombre:"Luis", edad:35},
    {nombre:"María",edad:38}
];
console.log("1. Usa .find() para buscar a la persona con nombre Luis.");
const nombre=personas.find(nomb=>nomb.nombre==="Luis").nombre;
console.log(nombre);
console.log("2. Usa .forEach() para imprimir el nombre de cada persona con su edad.");
personas.forEach(personas=>{console.log(personas)});
console.log("3. Usa .reduce() para sumar todas las edades y obtener un total.");
const total=personas.reduce((result, personas)=>result+personas.edad,0);
console.log(total);