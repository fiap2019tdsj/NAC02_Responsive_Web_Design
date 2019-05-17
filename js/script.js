 var alinha_resumo = document.querySelector(".alinha-resumo");
 var divsResumo = alinha_resumo.querySelectorAll("div");

 divsResumo.forEach(function(a) {
    a.style.display = "none";
 });

 var elementoA = document.querySelectorAll("a");

 elementoA.forEach(function(e) {
    e.addEventListener("click", function(evt) {
        evt.preventDefault;

        divsResumo.forEach(function(a) {
            a.classList.remove("active");
        });

        var id = this.getAttribute("href");
        var conteudoSelecionado = document.querySelector(id);

        conteudoSelecionado.classList.add("active");
    });
 });