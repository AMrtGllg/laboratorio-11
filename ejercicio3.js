let suma =0;
let nota;


for (let i = 1; i<= 5; i++) {
    nota = parseFloat(prompt("Ingrese la nota " + i + " de 0 a 20:"));
    
    if (nota >=0 && nota <=20) {
        suma += nota;
    }
    else {
        alert("Nota inválida.");
        i--;
    }
}

let promedio = suma / 5;
alert("El promedio es:" + promedio);