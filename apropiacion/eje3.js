export const mayoresQue50 = () => {
    let contador = 1;

    while (contador <= 10) {
        let numero = parseInt(prompt("Ingresa un número:"));

        if (numero > 50) {
            console.log(numero);
        }

        contador++;
    }
};