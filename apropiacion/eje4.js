import readlineSync from 'readline-sync';

export const cajeroAutomatico = () => {
  let saldo = 1000;

  console.log("Bienvenido al cajero automatico");

  while (true) {
    console.log("Saldo actual: $" + saldo);

    let retiro = parseInt(
      readlineSync.question("Cuanto dinero deseas retirar: ")
    );

    if (retiro > saldo) {
      console.log("Saldo insuficiente. Fin de la operacion.");
      break;
    }

    saldo -= retiro;

    console.log("Retiraste: $" + retiro);
  }

  console.log("Gracias por usar el cajero.");
};

