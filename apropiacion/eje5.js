import readlineSync from 'readline-sync';

export const competenciaAtletismo = () => {
  let corredor = 1;

  while (corredor <= 8) {
    let vuelta = 1;

    while (vuelta <= 4) {
      let cansado = readlineSync.question(
        "Corredor " + corredor + " - vuelta " + vuelta + " ¿se canso? (si/no): "
      );

      if (cansado.toLowerCase() === "si") {
        break;
      }

      vuelta++;
    }

    corredor++;
  }
};