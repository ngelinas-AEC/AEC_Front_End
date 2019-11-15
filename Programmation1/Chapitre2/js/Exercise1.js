<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Exercises SI</h2>

<p id="Exercise IF"></p>

<script>

	var nb1;
    var taxe;

    nb1 = Number(prompt("Entrez le montant total des achats :"));

    if(nb1>200) {
    	taxe = nb1 *0.15
        document.write("La réduction est de :"+taxe);
    }
    else {
        document.write("La réduction est de 0$");
    }


</script>

</body>
</html>
