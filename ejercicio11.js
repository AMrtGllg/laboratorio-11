let numero = parseInt(prompt("Ingrese un número:"));
let numStr = "" + numero;
let n = numStr.length;
let suma = 0;

for (let i = 0; i < n; i++) {
  suma += Math.pow(parseInt(numStr[i]), n);
}

if (suma === numero) {
  alert(numero + " ES un número Armstrong");
} else {
  alert(numero + " NO es un número Armstrong");
}
