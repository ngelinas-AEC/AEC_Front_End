/**
 * Created by Nico on 2019-10-24.
 */
//Lire un nombre et afficher le carré et le cube de ce nombre.

//Étape 1 : trouver les variables
var nom;
var age;
var agejours;

//Étape 2 : Lecture (demander à l'usager des données)
nom = Number(prompt("Veuillez entrer le nom : "));
age = Number(prompt("Veuillez entrer l'äge : "));

//Étape 3 : Les calculs
agejours = age * 365;

//Étape 4 : AFFICHE les résultats
console.log("L'age de " + nom + " en jour est " + agejours);
