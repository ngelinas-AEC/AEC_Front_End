
var indice;
var a = [ "tecno" , "Amazon"];
var b = [ "En1" , "Ent3"];
var c = [ "991" , "vieux M"];


indice = Number(prompt("Entrer l'indice de pollution entre 0 et 1"));

if (indice >= 0.04 && indice <= 0.31 ){
    document.write("Indice Normal");
}

else if (indice > 0.31 && indice <= 0.40 ){
    document.write(a);
}

else if (indice > 0.40 && indice <= 0.50 ){
    document.write(a + " - " + b);
}

else if (indice > 0.50 && indice <= 1 ){
    document.write(a+ " - " + b + " - " +c);
}

else{
    document.write("Valeur impossible");
}
