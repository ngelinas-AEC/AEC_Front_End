var controleur = prompt("Sélectionner le contrôleur entre un RASPBERRY PI ou un RASPBERRY PI ZERO ");
var moteurs = Number(prompt("Entrez le nombre de moteurs desirée (entre 2 et 24)"));
var usb = prompt("Voulez-vous une camera USB ? OUI ou NON");
var yeux = prompt("Voulez-vous une matrice web pour les yeux ? OUI ou NON");

var prixControleur;
var prixMoteur = moteurs * 5;
var prixUsb;
var prixYeux;
var prixfilament = 20;
var prixbatterie = 15;
var livraison = total * 0.15;
var sousTotal = ( prixControleur + prixUsb + prixMoteur + prixYeux + prixfilament + prixbatterie );
var total = sousTotal + livraison;

if ( controleur.toUpperCase() === "RASPBERRY PI"){
    prixControleur = 55;
}
else if ( controleur.toUpperCase() === "RASPBERRY PI ZERO"){
    prixControleur = 15;
}
if ( usb.toUpperCase() === "OUI"){
    prixUsb = 35;

}
else if ( usb.toUpperCase() === "NON"){
    prixControleur = 0;
}

if ( yeux.toUpperCase() === "OUI"){
    prixUsb = 10;
}
else if ( yeux.toUpperCase() === "NON"){
    prixControleur = 0;
}


else {
    document.write( "Non valide" );
}

