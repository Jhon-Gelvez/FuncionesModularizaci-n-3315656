
export function contadorNumeros() {
    let pares = 0;
    let impares = 0;
    const TOTAL_NUMEROS = 10;

    console.log("Iniciando el contador de números...");

    for (let i = 1; i <= TOTAL_NUMEROS; i++) {
        let entrada = prompt(`(${i}/${TOTAL_NUMEROS}) Ingresa un número:`);
       
        // Convertimos a número
        let numero = parseInt(entrada);

        // Validación: Si no es un número, repetimos el intento
        if (isNaN(numero)) {
            alert("Error: Por favor ingresa un número válido.");
            i--;
            continue;
        }

        // Lógica de paridad
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    const mensaje = `Resultado final:\n- Pares: ${pares}\n- Impares: ${impares}`;
    alert(mensaje);
    console.log(mensaje);
}