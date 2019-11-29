/**
 * Created by Shany on 2019-11-28.
 */
// 14. Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var A, B, C;
A = Number(prompt("Entrez le nombre A"));
B = Number(prompt("Entrez le nombre B (différent de A et C)"));
C = Number(prompt("Entrez le nombre C (différent de A et B)"));


if (A < B && A < C){ //A est le plus petit
    if(B > C){
        document.write("A plus petit :" + A + " B plus grand " + B);
    }
    else if(C > B){
        document.write("A plus petit :" + A + " C plus grand " + C);
    }
    else{
        document.write("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else if( B < A && B < C){ //B est le plus petit
    if(A > C){
        document.write("B plus petit :" + B + " A plus grand " + A);
    }
    else if(C > A){
        document.write("B plus petit :" + B + " C plus grand " + C);
    }
    else{
        document.write("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else if(C < A && C < B){ //C est le plus petit
    if(A > B){
        document.write("C plus petit :" + C + " A plus grand " + A);
    }
    else if(B > A){
        document.write("C plus petit :" + C + " B plus grand " + B);
    }
    else{
        document.write("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else{
    document.write("Vous avez entré des nombres égaux ou pas des nombres");
}