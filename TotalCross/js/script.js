$(document).ready(function(){

	$('.carousel').carousel();

	 $(".button-collapse").sideNav();
	
	$(".btn-todos").addClass("ativo");

	function bkgtranparent(){
		$(".transparent").style.background = "transparent";
	}

	//Mostrar imagens quando o botão estiver em foco
	//Todas as imagens
	$(".btn-todos").on("focus", function(){
		$(".btn-todos").addClass("ativo");
		$(".btn-brasil").removeClass("ativo");
		$(".btn-mundo").removeClass("ativo");
		$(".brasil").show("slow");
		$(".mundo").show("slow");
	});
	//Imagens class brasil
	$(".btn-brasil").on("focus", function(){
		$(".btn-brasil").addClass("ativo");
		$(".btn-todos").removeClass("ativo");
		$(".btn-mundo").removeClass("ativo");
		$(".mundo").hide("slow");
		$(".brasil").show("slow");
	});
	//Imagens class mundo
	$(".btn-mundo").on("focus", function(){
		$(".btn-mundo").addClass("ativo");
		$(".btn-todos").removeClass("ativo");
		$(".btn-brasil").removeClass("ativo");
		$(".brasil").hide("slow");
		$(".mundo").show("slow");
	});

	//Mostrar todas as imagens quando qualquer botão estiver em desfoco
	//Todas as imagens
	$(".btn-todos").on("blur", function(){
		$(".btn-todos").removeClass("ativo");
	});
	//Imagens class brasil
	$(".btn-brasil").on("blur", function(){
		$(".btn-brasil").removeClass("ativo");
		$(".brasil").show("slow");
		$(".mundo").show("slow");
	});
	//Imagens class mundo
	$(".btn-mundo").on("blur", function(){
		$(".btn-mundo").removeClass("ativo");
		$(".brasil").show("slow");
		$(".mundo").show("slow");
	});
});