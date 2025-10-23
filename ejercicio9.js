let N = parseInt(prompt("Ingrese el valor de N:"));
let suma = 0;

for (let i = 1; i <= N; i++) {
  if (i % 5 !== 0) {
    suma += i;
  }
}
alert("La suma (sin múltiplos de 5) es: " + suma);
