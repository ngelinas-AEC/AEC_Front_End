    var sexe = prompt("Veuillez entrer votre sexe M ou F: ");
	var age = Number(prompt("Veuillez entrer votre age: "));
    var valeur = Number(prompt("Veuillez entrer valeur auto: "));
    var prime = 0;
	if(sexe.toUpperCase() === "M") {
    	if((age >= 16) && (age <= 25)) {
        	prime = valeur * 0.05;
			document.write("<h1 id='vert'>votre prime est de " + prime);
    	}
        else if (age > 25) {
        	prime = valeur * 0.03;
			document.write("<h1 class='vert'>votre prime est de " + prime);
        }
		else 
			document.write('Vous ne pouvez pas conduire!');
    }
	else if(sexe.toUpperCase() === "F"){
    	if((age >= 16) && (age <= 25)) {
        	prime = valeur * 0.03;
    	}
        else {
        	prime = valeur * 0.02;
        }
    	document.write("<h1 id='magenta'>votre prime est de " + prime);
    } 
    else {
         document.write('sexe invalide!');
    }

