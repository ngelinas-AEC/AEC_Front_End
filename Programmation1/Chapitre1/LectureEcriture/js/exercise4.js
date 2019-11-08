/**
 * Created by Nico on 2019-10-24.
 */
//Lire un nombre et afficher le carré et le cube de ce nombre.

//Étape 1 : trouver les variables
var nombreheure;
var salaireheure;
var salairebrut;

//Étape 2 : Lecture (demander à l'usager des données)
nombreheure = Number(prompt("Veuillez entrer nombre d'heure : "));
salaireheure = Number(prompt("Veuillez entrer salaire/heure : "));

//Étape 3 : Les calculs
salairebrut = nombreheure * salaireheure;

//Étape 4 : AFFICHE les résultats
console.log("Le salaire brut est " + salairebrut);
