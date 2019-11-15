<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Exercises SI</h2>

<p id="Exercise IF"></p>

<script>

	var taux;
    var nbheure
    var surplus = 0;
    var salire = 0;

    taux = Number(prompt("Taux :"));
    nbheure = Number(prompt("Nombre d'heure :"));
	if(nbheure>40) {
    	surplus = nbheure - 40;
        nbheure = 40;
    }

	salaire = (surplus * (2*taux)) + (nbheure * taux);   
    document.write("Le salaire est "+salaire+"$");

</script>

</body>
</html>