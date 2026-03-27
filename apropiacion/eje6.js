export function iniciarCarrera() {
    const totalCorredores = 8;
    const vueltasObjetivo = 4;

    for (let i = 1; i <= totalCorredores; i++) {
        console.log(`\n🏃 Corredor ${i} en la pista:`);

        for (let v = 1; v <= vueltasObjetivo; v++) {
            if (i % 2 === 0 && v === 3) {
                console.log(` Corredor ${i} se cansó en la vuelta ${v}.`);
                break;  //**detiene las vueltas del corredor */
            }
            
            console.log(`  Vuelta ${v} completada`);
        }
    }
    console.log("\n Competencia finalizada.");
}