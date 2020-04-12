var indicePollution;
indicePollution = Number(prompt("Entrez l'indice de pollution actuelle
entre 0 et 1"));
if(indicePollution <= 0.04 && indicePollution <=0.31){
 document.write("L'indice de pollution est normal");
}
else if(indicePollution > 0.31 && indicePollution <= 0.40){
 document.write("Il faut aviser la liste A");
}
else if(indicePollution > 0.40 && indicePollution <= 0.50){
 document.write("Il faut aviser la liste A et la liste B");
}
else if(indicePollution > 0.50 && indicePollution <= 1){
 document.write("Il faut aviser la liste A, la liste B et la liste
C");
}
else{
 document.write("Valeur impossible");
}