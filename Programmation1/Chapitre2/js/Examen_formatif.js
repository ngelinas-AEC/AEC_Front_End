var controleur = Number(prompt("Controleur (1-RaspBerry Pi, 2-Raspberry Pi Zero): "));
var nbmoteur = Number(prompt("Nombre de moteur (2 et 24): "));
var camusb = prompt("Camera USB (O,N) ");
var matriceled = prompt("Matrice LED (O,N) ");

var facture = "";
var prix = 0;
var prixliv = 0;
var prixmoteur = 0;
var prixusb = 0;
var prixmatriceled = 0;

if ((nbmoteur >=2) && (nbmoteur <=24)) {
    prixmoteur = 5 * nbmoteur;
}

if (camusb.toUpperCase() === "O") {
    prixusb = 35;
}

if (matriceled.toUpperCase() === "O") {
    prixmatriceled = 10;
}

if ((controleur != 1) && (controleur != 2)) {
    facture = "Aucune facture";
    document.write(facture);
}
else {
    if (controleur == 1) {
        facture = "Robot avec Raspberry P, "+nbmoteur+" moteurs";
        prix = 55;
    }
    else if (controleur == 2) {
        facture = "Robot avec Raspberry Pi Zero, "+nbmoteur+" moteurs";
        prix = 15;
    }
    if (camusb.toUpperCase() === "O") {
        facture = facture + " caméra";
    }
    else {
        facture = facture + " pas de caméra";
    }

    if (matriceled.toUpperCase() === "O") {
        facture = facture + " matrice de LEDS.";
    }
    else {
        facture = facture + " pas de matrice de LEDS.";
    }
    prix = prix + prixmoteur + prixusb + prixmatriceled + 20 + 15;
    prixliv = (prix * 0.15) + prix;
    document.write(facture);

    document.write("prix: "+prix+" $");
    document.write("prix avec livraison (15%): "+prixliv+" $");
}

