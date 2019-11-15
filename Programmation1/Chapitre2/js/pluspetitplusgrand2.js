<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Exercises SI</h2>

<p id="Exercise IF"></p>

<script>

	var nb1;
	var nb2;
	var nb3;

    nb1 = Number(prompt("Entrez nombre 1 :"));
	nb2 = Number(prompt("Entrez nombre 2 :"));
	nb3 = Number(prompt("Entrez nombre 3 :"));

 
   if(nb1>nb2) {
        document.write(nb1+">"+nb2);
    }
    else if (nb1<nb2){
        document.write(nb1+"<"+nb2);
    }
    else
        document.write("erreu: "+nb1+"="+nb2);
    

</script>

</body>
</html>