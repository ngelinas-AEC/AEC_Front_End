
var position;
var angle = Number(prompt("Entrer un angle"));

if (angle >= 0  && angle <= 39){
    position = "Main fermée";
    document.write( "L'angle est : " + angle +" " + "Position = " + position);
}

else if (angle >= 40 && angle <= 89){
    position = "Main agrippe";
    document.write( "L'angle est : " + angle + " " + "Position = " + position);
}

 else if (angle >= 90 && angle <= 180) {
    position = "Main ouverte";
    document.write( "L'angle est : " + angle + " " + "Position = " + position);
}
 else{
    document.write( "Le robot est hors de contrôle");
}