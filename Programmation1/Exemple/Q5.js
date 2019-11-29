var temperature;

temperature = Number(prompt("Ecrit la température extérieur"));

if (temperature >= -40 && temperature <= -10  ) {
        document.write("HAAAAAAAAA! Il fait froid")
}

else if (temperature <= -40 ){
    document.write("Cest pas humain")
}

else {
    document.write("Enfin une belle journée!")
}