var figure = 0;
var rayon = 0;
var total = 0;
var longeur = 0;
var largeur = 0;
var cote = 0;

figure = prompt("Entrez la figure désirée (O=cercle, R=rectangle, T=triangle et C=carré): ");

if (figure.toUpperCase() === "O") {
	rayon = Number(prompt("Entrez le rayon: "));
	total = Math.pow(rayon,2) * Math.PI;
    document.write("L'aire du cercle est = "+total);
}
if (figure.toUpperCase() === "R") {
	longeur = Number(prompt("Entrez la longeur: "));
	largeur = Number(prompt("Entrez la largeur: "));
	total = longeur*largeur;
    document.write("L'aire du rectangle est = "+total);
}
if (figure.toUpperCase() === "T") {
	longeur = Number(prompt("Entrez la longeur: "));
	largeur = Number(prompt("Entrez la largeur: "));
	total = (longeur*largeur)/2;
    document.write("L'aire du triangle rectangle est = "+total);
}
if (figure.toUpperCase() === "C") {
	cote = Number(prompt("Entrez le côté: "));
	total = Math.pow(cote,2);
    document.write("L'aire du carré est = "+total);
}
