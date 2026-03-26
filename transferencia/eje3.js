import readlineSync from 'readline-sync';

export const cajeroAutomatico = () => {
  const saldoInicial = 1000;
  let saldo = saldoInicial;

  let continuar = true;

  while (continuar) {
    let retiro = parseInt(
      readlineSync.question("Ingrese el valor a retirar: ")
    );

    if (retiro > saldo) {
      readlineSync.question(
        "Error: saldo insuficiente. Presione enter para continuar"
      );
    } else {
      saldo -= retiro;

      readlineSync.question(
        "Retiro exitoso. Nuevo saldo: $" + saldo + " (presione enter)"
      );
    }

    let opcion = readlineSync.question(
      "¿Desea realizar otro retiro? (si/no): "
    );

    if (opcion.toLowerCase() === "no") {
      continuar = false;
    }
  }
};