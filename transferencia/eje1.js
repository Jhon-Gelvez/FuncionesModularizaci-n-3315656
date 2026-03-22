export const mostrarPrimos = () => {
    for (let i = 1; i <= 50; i++) {
        let esPrimo = true;

        // Comprobar divisores desde 2 hasta la raíz cuadrada del número
        for (let divisor = 2; divisor <= Math.sqrt(i); divisor++) {
            if (i % divisor === 0) {
                esPrimo = false;
                break; // Si encontramos un divisor, dejamos de buscar
            }
        }

        if (esPrimo && i != 1) {
            console.log(i);
        }
    }
};

