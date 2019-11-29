

var impot;
var revenu;

revenu = Number(prompt("Entrer votre revenu imposable"));


if (revenu > 0 && revenu <= 7000 ){
    impot = revenu * 0.16;
    document.write( "impôt provincial : " + impot.toFixed(2));
}

else if (revenu > 7000 && revenu <= 14000 ){
    impot = (revenu + 1120) * 0.195;
    document.write( "impôt provincial : " + impot.toFixed(2));
}

else if (revenu > 14000 && revenu <= 23000 ){
    impot = (revenu + 2485) * 0.215;
    document.write( "impôt provincial : " + impot.toFixed(2));
}

else if (revenu > 23000 && revenu <= 50000 ){
    impot = (revenu + 4420) * 0.245;
    document.write( "impôt provincial : " + impot.toFixed(2));
}

else if (revenu > 50000){
    impot = (revenu + 11035) * 0.245;
    document.write( "impôt provincial : " + impot.toFixed(2));
}


else {
    document.write( "Erreur");
}