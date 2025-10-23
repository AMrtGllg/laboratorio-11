let opcion;
do {
  opcion = parseInt(prompt("Menú:\n1. Área de círculo\n2. Área de rectángulo\n3. Salir"));
  if (opcion === 1) {
    let radio = parseFloat(prompt("Radio del círculo:"));
    let area = Math.PI * radio * radio;
    alert("Área del círculo: " + area);
  } else if (opcion === 2) {
    let base = parseFloat(prompt("Base:"));
    let altura = parseFloat(prompt("Altura:"));
    alert("Área del rectángulo: " + (base * altura));
  }
} while (opcion !== 3);
