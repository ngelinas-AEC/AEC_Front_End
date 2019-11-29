var age;


age = Number(prompt("Entrer votre age"));

if (age >= 18){
    document.write( "Adulte");
}

else if (age >= 12 && age <= 17 ){
    document.write( "Adolescent");
}

else if (age < 12 && age > 0 ){
    document.write( "Enfant");
}

else {
    document.write( "Erreur");
}