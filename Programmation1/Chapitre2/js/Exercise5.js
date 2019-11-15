<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Exercises SI</h2>

<p id="Exercise IF"></p>

<script>

	var nb1;

    nb1 = Number(prompt("Entrez une note :"));

   if(nb1>90) {
      document.write("La note est A");
    }
    else if(nb1>80){
        document.write(" La note est B ");
    }
    else if(nb1>70){
        document.write(" La note est C ");
    }
    else if(nb1>60){
        document.write(" La note est D ");
    }
    else {
        document.write(" La note est E ");
    }



</script>

</body>
</html>
