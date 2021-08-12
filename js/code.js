$(document).ready(function() {

	// Mostrar/ocultar menú + Transformación de botón izquierda a botón derecha

	// Versión escritorio
	if ((screen.width > 500)) { 
		$("#but-izq").click(function() {
			$("#navbar").animate({"left": "-=498px"}, "fast");
			$("#navbar").addClass('desactivado');
			$("#but-izq").animate({"left":"-1px"}, "fast");
			$("#but-der").animate({"left":"-1px"}, "fast");
			$("#main-doc").animate({"left": "50px"}, "fast");
			$("#but-izq").hide();
			$("#but-up").hide();
			$("#but-down").hide();
			$("#but-der").show("fast");
	});

		$("#but-der").click(function() {
		if  ($("#navbar").hasClass('desactivado')) {
			$("#navbar").animate({"left": "+=498px"}, "fast");
			$("#navbar").removeClass('desactivado');
			$("#but-der").animate({"left":"500px"}, "fast");
			$("#but-izq").animate({"left":"500px"}, "fast");
			$("#main-doc").animate({"left": "550px"}, "fast");
			$("#but-der").hide();
			$("#but-up").hide();
			$("#but-down").hide();
			$("#but-izq").show("fast");
		}
	});
}

	// Versión móvil + Transformación botón arriba a botón abajo
	$("#but-up").click(function() {
		$("#navbar").hide("fast");
		$("#navbar").addClass('desactivado');
		$("#but-up").hide();
		$("#but-izq").hide();
		$("#but-der").hide();
		$("#main-doc").show();
		$("#but-down").show("fast");
	});

	$("#but-down").click(function() {
		$("#navbar").show("fast");
		$("#navbar").removeClass('desactivado');
		$("#but-down").hide();
		$("#but-izq").hide();
		$("#but-der").hide();
		$("#main-doc").hide();
		$("#but-up").show("fast");
	});
	
	if ($(window).width() <= 500) {

       $(".nav-link").click(function() {
       		$("#navbar").hide("fast");
			$("#navbar").addClass('desactivado');
			$("#but-up").hide();
			$("#but-izq").hide();
			$("#but-der").hide();
			$("#main-doc").show();
			$("#but-down").show("fast");
       });
    }
	
});