var lettre;
var voyelle;
var consonne;


lettre = prompt("Entrer une lettre");


if (lettre.toUpperCase() === "A" || lettre.toUpperCase() === "E" || lettre.toUpperCase() === "I" || lettre.toUpperCase() === "O" || lettre.toUpperCase() === "U" || lettre.toUpperCase() === "Y" ){
    document.write("Voyelle");
}

else{
    document.write("Consonne");
}