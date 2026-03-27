 export function sumarHastaNoventa() {
    let sumaTotal = 0;

    for (let i = 1; i <= 100; i++) {
        // Condición: Si el número es mayor a 90 Y es par
        if (i > 90 && i % 2 === 0) {
            console.log(`\n Interrupción: El número ${i} es mayor a 90 y es par.`);
            break; // Detiene el ciclo por completo
        }

        sumaTotal += i; // Acumula el número en la variable
        console.log(`Sumando: ${i} | Total actual: ${sumaTotal}`);
    }

    console.log(`\nResultado final de la suma: ${sumaTotal}`);
}