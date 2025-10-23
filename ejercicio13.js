let total = 0;
let continuar;
do {
  let precio = parseFloat(prompt("Ingrese precio del producto:"));
  total += precio;
  continuar = prompt("¿Agregar otro producto? (s/n)").toLowerCase();
} while (continuar === "s");

let mensaje = "";
if (total > 100) {
  mensaje = "Tiene un descuento del 10%";
  total = total * 0.9;
} else if (total >= 50) {
  mensaje = "Gana cupón de 5 (descuento aplicado)";
  total = total - 5;
} else {
  mensaje = "No aplica descuento";
}
alert(mensaje + "\nTotal a pagar: " + total);
