import readline from "readline-sync";

export const tablaMultiplicar = () => {
    // variable para controlar la salida del bucle
    let repetir = "si";
    do {
        let numero = readline.questionInt("ingrese un numero: ");
        for (let i = 1; i <= 12; i++) {
            console.log(`${numero} * ${i} = ${numero * i}`);
        }
        repetir = readline.question("desea calcular otro numero? (si/no) ");
    } while (repetir == "si");
};
tablaMultiplicar()