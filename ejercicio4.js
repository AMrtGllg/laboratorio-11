let edad = parseInt(prompt("Ingrese su edad:"));
let rango;

if (edad<12) {
    rango = "Niño";
}
else if (edad >=12 && edad <=17) {
    rango = "Adolescente";
}
else if (edad>=18 && edad<=59) {
    rango= "Adulto";
}
else if (edad>=60){
    rango = "Adulto mayor";
}
else {
    rango = "Edad no válida";
}

alert("Usted es: " +rango);
console.log("Rango etario: " + rango);