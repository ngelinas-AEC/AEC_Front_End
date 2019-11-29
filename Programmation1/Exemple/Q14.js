//pas terminé//

var a;
var b;
var c;


a = Number(prompt("Entrer un nombre"));
b = Number(prompt("Entrer un 2eme nombre"));
c = Number(prompt("Entrer un 3eme nombre"));

 if (a < b && a < c){
    if (b > c){
        document.write( "Le plus petit nombre est : " + a + " " + "Le plus grand nombre est : " + b);
    }
}

if (a < b && a < c){
    if (b > c){
        document.write( "Le plus petit nombre est : " + a + " " + "Le plus grand nombre est : " + b);
    }
    else{
        document.write( "Le plus petit nombre est : " + a + " " + "Le plus grand nombre est : " + c);
    }
}

if (b < a && b < c){
    if (a > c){
        document.write( "Le plus petit nombre est : " + b + " " + "Le plus grand nombre est : " + a);
    }
    else{
        document.write( "Le plus petit nombre est : " + b + " " + "Le plus grand nombre est : " + c);
    }
}

if (c < a && c < b){
    if (b > a){
        document.write( "Le plus petit nombre est : " + c + " " + "Le plus grand nombre est : " + b);
    }
    else{
        document.write( "Le plus petit nombre est : " + c + " " + "Le plus grand nombre est : " + a);
    }
}


