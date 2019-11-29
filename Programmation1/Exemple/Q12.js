var age;
var sexe;
var prime;
var valeur;
var taux;

valeur = Number(prompt("Entrer la valeur de votre voiture"));
age = Number(prompt("Entrer votre age"));
sexe = prompt("Entrer votre sexe");



if (sexe.toUpperCase() === "M") {
    if (age >= 16  && age <= 25) {
      prime = valeur * 0.05;
      document.write(prime);
    }
    else{
        prime = valeur * 0.03;
        document.write(prime);
    }
}

else if (sexe.toUpperCase() === "MME"){
    if (age >= 16 && age <= 25) {
        prime = valeur * 0.03;
        document.write(prime);
    }
    else{
        prime = valeur * 0.02;
        document.write(prime);
    }
}

else{
    prime= ("Entrer non valide");
    document.write(prime);
}



//alert("Votre prime est de : " + prime);

//document.write("<p>C'est pas humain! <strong class='texteRouge'>" + temperature +"</strong></p>");//