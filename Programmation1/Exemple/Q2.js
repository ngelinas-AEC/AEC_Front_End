var total;
var reduction;


total = Number(prompt("Entrer le prix de votre facture"))
reduction = (total * 0.85);

if(total >= 200 ) {
    document.write(total - reduction);
}
else {
    document.write("Pas de rabais");
}
