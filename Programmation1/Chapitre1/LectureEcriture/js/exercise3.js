/**
 * Created by Nico on 2019-10-24.
 */
//Lire un nombre et afficher le carré et le cube de ce nombre.

//Étape 1 : trouver les variables
var nombre;
var nombregallon;

//Étape 2 : Lecture (demander à l'usager des données)
nombre = Number(prompt("Veuillez entrer un nombre svp : "));

//Étape 3 : Les calculs
nombregallon = nombre * 4.55;

//Étape 4 : AFFICHE les résultats
console.log(nombre + " gallons est égale a " + nombregallon + " litres");
