const prix = 10;
const tps = 0.05;
const tvq = 0.09975;
var legume;
var pep;
var sauce;

var prixSansTaxe = 0;
var taxe = 0;
var total = 0;

prixSansTaxe = prix;

var legume = prompt("Désirez-vous des légumes sur votre pizza (O,N) ");
var pep = prompt("Désirez-vous des pep sur votre pizza (O,N) ");
var sauce = prompt("Désirez-vous de la sauce sur votre pizza (O,N) ");

if (legume.toUpperCase() === "O") {
    prixSansTaxe = prixSansTaxe + 5;
}

if (pep.toUpperCase() === "O") {
    prixSansTaxe = prixSansTaxe + 8;
}

if (sauce.toUpperCase() === "O") {
    prixSansTaxe = prixSansTaxe + 1;
}

taxe = (prixSansTaxe * tps) + (prixSansTaxe * tvq);
total = prixSansTaxe + taxe;
document.write("Facture pour une pizza "+prixSansTaxe+"$ + taxe("+taxe.toFixed(2)+"$)= "+total.toFixed(2)+"$");
