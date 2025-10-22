let cantidadNumeros = 10;
let pares = 0;
let impares = 0;
let numero;

for (let i = 1; i<= cantidadNumeros; i++){
    numero = parseInt(prompt("Ingrese el número " + i + ":"));
    if (numero % 2 ===0){
        pares ++;
    }
    else {
        impares++;
    }
}
alert("Cantidad de pares: " + pares + " Cantidad de impares: " + impares);
console.log("Cantidad de pares: " + pares + " Cantidad de impares: " + impares);