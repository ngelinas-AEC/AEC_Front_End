var note;

note = Number(prompt("Entrer votre note"));

if (note < 60 && note >= 0 ){
    document.write("Échec");
}

else if(note >= 60 && note <= 100 ){
    document.write("Bravo");
}

else {
    document.write("Erreur");
}