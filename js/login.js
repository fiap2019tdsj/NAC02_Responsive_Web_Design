var rm = document.querySelector("#rm_login");
var senha = document.querySelector("#senha");
var btnEntrar = document.querySelector("#btn-entrar");
var form = document.querySelector("form");

btnEntrar.addEventListener("click", function(e) {
    e.preventDefault();

    if (rm.value != "12345") {
        alert("RM inválido.");
        rm.focus();
        return false;
    }

    if (senha.value != "s2ratels2") {
        alert("Senha incorreta.");
        senha.focus();
        return false;
    }

    form.submit();
});