let monto = parseInt(prompt("Ingrese el monto a retirar:"));
let b100 = Math.floor(monto / 100);
monto = monto % 100;
let b50 = Math.floor(monto / 50);
monto = monto % 50;
let b20 = Math.floor(monto / 20);
monto = monto % 20;
let b10 = Math.floor(monto / 10);
monto = monto % 10;

alert(
  "Billetes entregados:\n" +
  "100: " + b100 + "\n" +
  "50: " + b50 + "\n" +
  "20: " + b20 + "\n" +
  "10: " + b10
);
