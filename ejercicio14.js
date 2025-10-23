let presupuesto = parseFloat(prompt("Ingrese su presupuesto:"));
let total = 0;
let continuar;
do {
  let precio = parseFloat(prompt("Ingrese precio del producto:"));
  if (total + precio > presupuesto) {
    alert("No puede agregar ese producto, supera el presupuesto!");
    continuar = "n";
  } else {
    total += precio;
    continuar = prompt("¿Agregar otro producto? (s/n)").toLowerCase();
  }
} while (continuar === "s");
alert("Total a pagar: " + total);
