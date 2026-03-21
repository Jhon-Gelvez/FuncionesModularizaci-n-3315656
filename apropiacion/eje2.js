import readline from "readline-sync";
export const registrarIngresoEstudiantes = () => {
    for (let i = 1; i <= 5; i++) {
        let respuesta = readline.question("el estudiante trajo su carnet? (s/n) ");
        respuesta = respuesta.toLowerCase();

        if (respuesta == "s") console.log("puedes ingresar");
        else console.log("no puedes ingresar");
    }
};
registrarIngresoEstudiantes();