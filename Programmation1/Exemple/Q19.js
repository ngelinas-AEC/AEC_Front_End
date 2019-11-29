

var escompte;
var vente;

vente = Number(prompt("Entrer le montant de vente de votre auto"));

escompte= vente * 0.12;


if (vente >= 500){
    document.write("Le montant de la voiture est :" + vente + "$" + " " + "Le montant de l'escompte est :" + escompte.toFixed(2) + "$");
}

else{
    document.write("Désoler , pas d'escompte");
}

