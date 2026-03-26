import readlineSync from 'readline-sync';

export const promedioNotas = () => {
  let estudiante = 1;

  while (estudiante <= 5) {
    let suma = 0;
    let cantidadNotas = 3; // puedes cambiar la cantidad si quieres

    let i = 1;

    while (i <= cantidadNotas) {
      let nota = parseFloat(
        readlineSync.question(
          "Estudiante " + estudiante + " - Ingrese la nota " + i + ": "
        )
      );

      suma += nota;
      i++;
    }

    let promedio = suma / cantidadNotas;

    if (promedio >= 3.0) {
      readlineSync.question(
        "Estudiante " + estudiante + " APRUEBA con promedio: " + promedio + " (enter)"
      );
    } else {
      readlineSync.question(
        "Estudiante " + estudiante + " REPRUEBA con promedio: " + promedio + " (enter)"
      );
    }

    estudiante++;
  }
};