let limite = parseInt(prompt("Ingrese el número límite:"));
let primos = "";

for (let x = 2; x <= limite; x++) {
  let esPrimo = true;
  for (let y = 2; y < x; y++) {
    if (x % y === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    primos += x + " ";
  }
}
alert("Primos entre 1 y " + limite + ":\n" + primos);
