
var note;

note = Number(prompt("Ecrit un note sur 100"));

if (note >= 90 && note <= 100 ) {
    document.write("A")
}

else if (note >= 80 && note < 90 ) {
    document.write("B")
}

else if (note >= 70 && note < 80) {
    document.write("C")
}

else if (note >= 60 && note < 70 ) {
    document.write("D")
}

else if (note < 60 && note >= 0 ) {
    document.write("E")
}