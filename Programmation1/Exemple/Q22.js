
var couleur;


couleur = (prompt("Choisir un des 3 choix suivantes : Vert, Rouge ou Bleu"));

if(couleur.toUpperCase() === "VERT"){
    document.write("<a class = vert1 > Voici du vert  </a>")
}

else if(couleur.toUpperCase() === "ROUGE"){
    document.write("<a class = rouge1 > Voici du rouge  </a>")
}

else if(couleur.toUpperCase() === "BLEU"){
    document.write("<a class = bleu1 > Voici du bleu  </a>")
}

else{
    document.write("Erreur");
}