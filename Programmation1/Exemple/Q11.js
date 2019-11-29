
var lettre;


lettre = String(prompt("Écrire une lettre au hasard"));

if (lettre === "w"){
    document.write("Avancer");
}

else if (lettre === "a"){
    document.write("Gauche");
}

else if (lettre === "d"){
    document.write("Droite");
}

else if (lettre === "s"){
    document.write("Reculer");
}

    else{
    document.write("ERREUR");
    }
