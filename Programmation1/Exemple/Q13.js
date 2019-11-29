
var nombre1;
var nombre2;



nombre1 = Number(prompt("Entrer un nombre"));
nombre2 = Number(prompt("Entrer un deuxieme nombre"));

if(nombre1 > nombre2 ) {
    document.write( "Le plus petit nombre est : " + nombre2 + " " + "Le plus grand nombre est : " + nombre1);
}

else if (nombre2 > nombre1 ) {
    document.write("Le plus petit nombre est : " + nombre1 + " " + "Le plus grand nombre est : " + nombre2 )
}


else if (nombre1 === nombre2){
    document.write("Erreur")
}

