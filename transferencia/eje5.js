import readlineSync from 'readline-sync';

export const tiendaProductos = () => {
  let total = 0;
  let continuar = true;

  while (continuar) {
    let precio = parseFloat(
      readlineSync.question("Precio del producto: ")
    );

    let cantidad = parseInt(
      readlineSync.question("Cantidad: ")
    );

    total += precio * cantidad;

    let opcion = readlineSync.question(
      "¿Desea comprar otro producto? (si/no): "
    );

    if (opcion.toLowerCase() === "no") {
      continuar = false;
    }
  }

  if (total > 100000) {
    total = total * 0.9;
  }

  readlineSync.question("Total a pagar: $" + total + " (enter)");
};