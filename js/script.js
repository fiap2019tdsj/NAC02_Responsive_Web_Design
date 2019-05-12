$(function(){

    $(".listaConteudo").css("display", "none");
    $(".listaConteudo#conteudo1").addClass("active");

    $("a").on("click", function( e ){         
        e.preventDefault();
        
    	$(".conteudo").removeClass("active");
        var id = $(this).attr("href"); 
        $("#"+id+"").addClass("active");
        
    });
});
console.log(conteudo);