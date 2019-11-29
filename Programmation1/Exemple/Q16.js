
var nombre1;
var nombre2;
var produit
var sommes;
var difference;


nombre1 = Number(prompt("Entrer un nombre"));
nombre2 = Number(prompt("Entrer un 2eme nombre"));

produit = nombre1 * nombre2;
sommes = nombre1 + nombre2;
difference = nombre1 - nombre2;


if (nombre1 >= 10  && nombre2 >= 10){
    document.write(  "La somme est  : " + sommes);
}

else if (nombre1 <= 10  && nombre2 <= 10){
    document.write(  "Le produit est  : " + produit);
}

else {
    document.write(  "La différence est  : " + difference);
}