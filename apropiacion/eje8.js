 export function filtrarMayores() {
    // Definimos 5 personas con sus edades
    const personas = [
        { nombre: "David", edad: 20 },
        { nombre: "Ana", edad: 17 },
        { nombre: "Carlos", edad: 18 },
        { nombre: "Lucía", edad: 15 },
        { nombre: "Felipe", edad: 22 }
    ];

    console.log("--- Listado de personas mayores de 18 años ---");

    for (let i = 0; i < personas.length; i++) {
        // Condición: Solo mostrar si la edad es mayor o igual a 18
        if (personas[i].edad >= 18) {
            console.log(` ${personas[i].nombre} tiene ${personas[i].edad} años. (Acceso Permitido)`);
        }
    }
}
