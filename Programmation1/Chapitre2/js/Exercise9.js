<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Exercises SI</h2>

<p id="Exercise IF"></p>

<script>
    var mois; 

	nomsDesMois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", 	"septembre", "octobre", "novembre", "décembre") ;
	mois = Number(prompt("mois :"));
	if((mois>=1) && (mois<=12)) {
    	document.write("Nous sommes " + nomsDesMois[mois-1] ) ;   
    } 
    else {
    	document.write("Erreur mois invalide!");
    }

</script>

</body>
</html>