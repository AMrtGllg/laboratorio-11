let numero = parseInt(prompt("Ingrese un número para la tabla:"));
let resultado = "";
for (let i = 1; i <= 12; i++) {
  resultado += numero + " x " + i + " = " + (numero * i) + "\n";
}
alert("Tabla del " + numero + ":\n" + resultado);
