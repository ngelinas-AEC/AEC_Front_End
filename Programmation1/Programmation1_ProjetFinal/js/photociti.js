/*  photociti.js		*/
/*	Par Nico Gélinas	*/
/*	Le 10 avril 2020	*/

let nouvelLettre = "";
let altLettre = "";
let imageID = "";
let backgroundCadre = "blanc";
let oldBackgroundCadre = "blanc";
let motCadre = [];
let carCadre = [];
let colSize = "";

(function () {
    $.fn.removeSpecialChar = function() {
        return this.each(function() {
            var strString = $(this).val();
            strString = strString.replace(/À|A/g,'A');
            strString = strString.replace(/à|а/g,'a');
            strString = strString.replace(/Ù|U/g,'U');
            strString = strString.replace(/ù|u/g,'u');
            strString = strString.replace(/È|É|Ê|Ë|Е/g,'E');
            strString = strString.replace(/è|é|ê|ë|е/g,'e');
            $(this).val(strString);
        });
    };
}());

function ajusterColonnes(motCadre) {
    for (i=0;i<motCadre.length;i++){
		if (motCadre.length === 3) {
			colSize = "col-4";
			$("#idLettre" +(i+1)).addClass(colSize);
		} else if (motCadre.length === 4) {
			colSize = "col-3";
			$("#idLettre" +(i+1)).addClass(colSize);
		} else if (motCadre.length === 5 || motCadre.length === 6) {
			colSize = "col-2";
			$("#idLettre" +(i+1)).addClass(colSize);
		} else if (motCadre.length >= 7) {
			colSize = "col-1";
			$("#idLettre" +(i+1)).addClass(colSize);
		}
    }
}

function genererPhoto() {
    $("#photocitiMessage_error").html("");
    motCadre = $("input#photocitiMessage").val();
	effacerLettres(motCadre);
    if (motCadre.length >= 3 && motCadre.length <= 12 && /^[a-zA-Z\*]+$/.test(motCadre)) {
        placerLettres(motCadre);
    }
    else if (/^[a-zA-Z\*]+$/.test(motCadre) != true){       
        $("#photocitiMessage_error").html("Le mot doit contenir que des lettres de l'alphabet");
    }
    else{        
        $("#photocitiMessage_error").html("Le mot doit contenir entre 3 et 12 caractères.");
    }
}

$(document).on("keypress", "input", function(e){
    if(e.which === 13){
        $(this).removeSpecialChar();
        genererPhoto();
    }
});

$(document).ready(function(){
	$('#blanc').click();
});


$("#photocitiMessage").change(function () {
    $(this).removeSpecialChar();
});

$(".newBackgroundCadre").click(function() {
	backgroundCadre = $(this).attr("id");
    $("#" + oldBackgroundCadre).removeClass("imageSelect", "border-color");
    $(this).addClass("imageSelect");
    oldBackgroundCadre = $(this).attr("id");
	$(".outputCadre").css("background-image", "url('background/" + backgroundCadre + ".jpg");
});

$("#BoutonSauvegarde").click(function () {
    if (nouvelLettre !== "")
        $("#" + imageID).attr("src", nouvelLettre);
});

$("#modalCarousel").on('hidden.bs.modal', function () {
    for (i=0;i<5;i++) {
        $('#imageLettre' + (i + 1)).attr("src", "");
    }
});

function effacerLettres(motCadre){
    $('.lettresCadre').html("");
    carCadre = motCadre.toUpperCase().split("");
    for (i=0;i<carCadre.length;i++) {
        if (carCadre[i] === "*") {
            carCadre[i] = "CS";
        }
    }
    for (i=0;i<=12;i++) {
        $('#idLettre' + (i + 1)).css("display","none");
        $('#idLettre' + (i + 1)).attr("class","lettremotCadre");
    }
}

$(".carousel-item img").click(function () {
    for (i=0;i<5;i++) {
        if ($("#imageLettre" + (i + 1)).hasClass("imageSelect")) 
            $("#imageLettre" + (i + 1)).removeClass("imageSelect");
    }
    nouvelLettre = $(this).attr("src");
    $(this).addClass('imageSelect');
});

function placerLettres() {
	ajusterColonnes(motCadre);
    for (i = 0; i < carCadre.length; i++) {
        altLettre = carCadre[i];
        let lettreTempo = $("#lettreTempo" + (i + 1));
        lettreTempo.attr("src", "${nouvelLettre}");
        lettreTempo.attr("alt", "${carCadre[i]}");
        $("#idLettre" + (i + 1)).css("display", "flex");
        $(".lettresCadre").append(
		`<div class="${colSize}">
			<img src="./Letters/${carCadre[i]}/${carCadre[i]}1.jpg" 
				style="border-style: solid;
					   border-color: white;
	                   border-width: 2px;"
				class="img-fluid photoimg" 
				data-toggle="modal" 
				alt="${carCadre[i]}" 
				id="lettreTempo${i + 1}" 
				data-target="#modalCarousel">
		</div>`);
    }
    $(".photoimg").click(function() {
        for (i=0;i<5;i++) {
            if ($("#imageLettre" + (i + 1)).hasClass("imageSelect")) {
                $("#imageLettre" + (i + 1)).removeClass("imageSelect");
            }
        }
        imageID = $(this).attr("id");
        altLettre = $(this).attr("alt");
        for (var i=0;i<5;i++){
            $('#imageLettre' + (i+1)).attr("src", "./Letters/" + altLettre + "/" + altLettre+ ( i+1)  + ".jpg");
        }
    });
}
