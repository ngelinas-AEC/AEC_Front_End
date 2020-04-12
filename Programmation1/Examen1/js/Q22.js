var couleurFond;
var couleurTexte;
var texte;

couleurFond =  prompt("Entrez la couleur de fond (rouge bleu vert)");
couleurTexte = prompt("Entrez la couleur du texte (blanc noir gris");
texte = prompt("Entrez le texte que vous voulez écrire : ");

if(couleurFond === "rouge"){
    if (couleurTexte === "blanc"){
        console.log("%c " + texte, 'background: #FF0000; color: #ffffff');
    }
    else if (couleurTexte === "noir"){
        console.log("%c " + texte, 'background: #FF0000; color: #000000');
    }
    else if (couleurTexte === "gris"){
        console.log("%c " + texte, 'background: #FF0000; color: #666666');
    }
    else{
        console.log("VOus n'avez pas entré les couleurs correctement");
    }
}
else if(couleurFond === "bleu"){
    if (couleurTexte === "blanc"){
        console.log("%c " + texte, 'background: #0000FF; color: #ffffff');
    }
    else if (couleurTexte === "noir"){
        console.log("%c " + texte, 'background: #0000FF; color: #000000');
    }
    else if (couleurTexte === "gris"){
        console.log("%c " + texte, 'background: #0000FF; color: #666666');
    }
    else{
        console.log("VOus n'avez pas entré les couleurs correctement");
    }
}
else if(couleurFond === "vert"){
    if (couleurTexte === "blanc"){
        console.log("%c " + texte, 'background: #00FF00; color: #ffffff');
    }
    else if (couleurTexte === "noir"){
        console.log("%c " + texte, 'background: #00FF00; color: #000000');
    }
    else if (couleurTexte === "gris"){
        console.log("%c " + texte, 'background: #00FF00; color: #666666');
    }
    else{
        console.log("VOus n'avez pas entré les couleurs correctement");
    }
}
else{
    console.log("VOus n'avez pas entré les couleurs correctement");
}