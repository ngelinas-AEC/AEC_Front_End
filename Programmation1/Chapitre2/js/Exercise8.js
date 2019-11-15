<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Exercises SI</h2>

<p id="Exercise IF"></p>

<script>

	var nom;
    var pw;

    nom = prompt("Nom: ");
    pw = prompt("Mot de passe: ");

	if((nom === "admin") && (pw === "12345")) {
    	document.write("Bonjour ["+nom+"]");
    }
    else {
    	document.write("Votre nom d’utilisateur ou votre mot de passe est invalide ");   
    }   

</script>

</body>
</html>
