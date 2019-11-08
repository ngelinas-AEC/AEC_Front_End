/**
 * Created by Nico on 2019-10-24.
 */
//Lire un nombre et afficher le carré et le cube de ce nombre.

//Étape 1 : trouver les variables
var nomarticle;
var prixdetail;
var prixgros;
var profit;

//Étape 2 : Lecture (demander à l'usager des données)
nomarticle = prompt("Veuillez entrer le nom : ");
prixdetail = Number(prompt("Veuillez entrer l'äge : "));

//Étape 3 : Les calculs
prixgros = prixdetail * 0.66;
profit = prixdetail - prixgros;
//Étape 4 : AFFICHE les résultats
console.log("Le prix de gros de l'article " + nomarticle + " est " + prixgros + " et le profit est "+profit);
