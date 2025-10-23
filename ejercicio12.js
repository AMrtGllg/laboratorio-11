let notas = [];
let opcion;
do {
  opcion = parseInt(prompt("Menú:\n1. Ingresar notas\n2. Promedio\n3. Máximo\n4. Mínimo\n5. Cantidad pares/impares\n6. Cuántos sobre promedio\n7. Tabla de multiplicar\n8. Salir"));
  if (opcion === 1) {
    notas = [];
    let cantidad = parseInt(prompt("¿Cuántas notas?"));
    for (let i = 0; i < cantidad; i++) {
      notas.push(parseFloat(prompt("Nota " + (i + 1) + ":")));
    }
  } else if (opcion === 2) {
    let suma = notas.reduce((a, b) => a + b, 0);
    alert("Promedio: " + (suma / notas.length));
  } else if (opcion === 3) {
    alert("Máximo: " + Math.max(...notas));
  } else if (opcion === 4) {
    alert("Mínimo: " + Math.min(...notas));
  } else if (opcion === 5) {
    let p = notas.filter(n => n % 2 === 0).length;
    let im = notas.length - p;
    alert("Pares: " + p + ", Impares: " + im);
  } else if (opcion === 6) {
    let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    let encima = notas.filter(n => n > promedio).length;
    alert("Notas sobre promedio: " + encima);
  } else if (opcion === 7) {
    let num = parseInt(prompt("Número para tabla:"));
    let tabla = "";
    for (let i = 1; i <= 12; i++) {
      tabla += num + "x" + i + "=" + (num * i) + "\n";
    }
    alert(tabla);
  }
} while (opcion !== 8);
