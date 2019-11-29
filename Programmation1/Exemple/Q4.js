var nombre1;
var nombre2;
var total,



nombre1 = Number(prompt("Ecrit un nombre"));
nombre2 = Number(prompt("Ecrit un 2eme nombre"));
total = nombre1 / nombre2;

if (nombre2 != 0){
    document.write(total)
}

else if (nombre2 === 0){
    document.write("Division par zéro interdite")
}

else {
    document.write(total)
}