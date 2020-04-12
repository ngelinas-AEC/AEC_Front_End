var age;

age = Number(prompt("Entrez l'âge de la personne: "));

if(age < 0){
	document.write("Pas encore né.");
}
else if(age >=0 && age <= 12){
	document.write("Pour age="+age+" tranche enfant");
}
else if(age >=13 && age <= 17){
	document.write("Pour age="+age+" tranche adolescent");
}
else if(age >=18 && age <= 54){
	document.write("Pour age="+age+" tranche adulte");
}
else if(age >=55){
	document.write("Pour age="+age+" tranche senior");
}
