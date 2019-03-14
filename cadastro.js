/*questão 05*/
function validacao() {
    var formulario = document.getElementById("register");
    var usuario = formulario.usuario;
    var senha = formulario.senha;

    if (usuario.value == "") {
        alert("Insira um nome válido.");
        return false;
    }

    if (document.form.senha.value != document.form.senharep.value)
    alert("Senhas incorretas");
        return false;
    }
}
/*questão 06*/
function Check() {
    var palavra = prompt("Escreva aqui");
    palavra = palavra.toLowerCase().replace(/\s/g, "");
    palavraI = palavra.split("").reverse().toString();
    for (var i = 0; i < ((palavraI.length) - 1); i++) {
        palavraI = palavraI.replace(",", "");
    };
    if (palavra == palavraI) {
        alert("Essa palavra é Palíndroma")
    } else {
        alert("Essa palavra não é Palíndroma")
    }
}