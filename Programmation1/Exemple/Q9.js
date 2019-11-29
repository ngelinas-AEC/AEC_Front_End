
var utilisateur;
var motdePasse;

utilisateur = String(prompt("Votre nom d’utilisateur"));
motdePasse = String(prompt("Votre mot de passe"));

if (utilisateur === "admin" && motdePasse === "12345") {
    document.write("Bonjour " + utilisateur);
}

else{
    document.write("Votre nom d’utilisateur ou votre mot de passe est invalide ");
}