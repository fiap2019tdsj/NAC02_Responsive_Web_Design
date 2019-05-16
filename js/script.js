 $(function(){

     $("alinha-resumo div").css("display", "none");
     $("alinha-resumo div#capitulo1").addClass("active");

     $("a").on("click", function( e ){         
         e.preventDefault();
        
     	$(".alinha-resumo div").removeClass("active");
         var id = $(this).attr("href"); 
         $("#"+id+"").addClass("active");        
     });
 });

//console.log(capitulo1);