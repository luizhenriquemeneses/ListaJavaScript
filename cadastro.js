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