export function contraseña() {
    // Definimos las credenciales correctas
    const USUARIO_CORRECTO = "admin";
    const CLAVE_CORRECTA = "1234";
   
    let intentos = 3;
    let accesoConcedido = false;

    while (intentos > 0) {
        let user = prompt(`Usuario (Intentos restantes: ${intentos}):`);
        let pass = prompt(`Contraseña:`);

        if (user === USUARIO_CORRECTO && pass === CLAVE_CORRECTA) {
            alert("Bienvenido");
            accesoConcedido = true;
            break; // Salimos del bucle si acierta
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`Datos incorrectos. Te quedan ${intentos} intentos.`);
            }
        }
    }

    if (!accesoConcedido) {
        alert("Acceso denegado");
    }
}
