
export function iniciarJuego() {
    const numeroSecreto = Math.floor(Math.random() * 20) + 1;
    let acertado = false;

    console.log("Juego iniciado");

    while (!acertado) {
        let entrada = prompt("Adivina el número (1-20):");

        if (entrada === null) break; 

        let intento = parseInt(entrada);

        if (isNaN(intento)) {
            alert("Ingresa un número válido.");
            continue;
        }

        if (intento === numeroSecreto) {
            alert("¡Felicidades! Adivinaste.");
            acertado = true;
        } else if (intento < numeroSecreto) {
            alert("Es mayor que " + intento);
        } else {
            alert("Es menor que " + intento);
        }
    }
}