var perimetre;
var surface;
var largeur;
var longueur;

longueur = Number(prompt("Entrer la longueur du rectangle"));
largeur = Number(prompt("Entrer la largeur du rectangle"));

perimetre = (largeur + longueur) * 2;

surface = (largeur * longueur);



if (perimetre >= 100 ){
    document.write(  "La surface du rectangle est  : " + surface + "cm2" );
}

else{
    document.write(  "Le rectangle est trop petit " );
}