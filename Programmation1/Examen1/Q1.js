var nbrPersonne;
var prix = 50;
var rabais = 0;
var montant = 0;

nbrPersonne = Number(prompt("Entrez le nombre de personnes? "));

montant = nbrPersonne * prix;

if(nbrPersonne < 10){
	rabais = 0;
}
else if(nbrPersonne >= 40){
	rabais = 0.20;
}
else if(nbrPersonne >= 30){
	rabais = 0.15;
}
else if(nbrPersonne >= 20){
	rabais = 0.10;
}
else if(nbrPersonne >= 10){
	rabais = 0.5;
}

montant = montant - (montant * rabais);
document.write("Le montant de l'inscription est: " + montant);

