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
/*Questão 7*/
function Nomes() {

    var c1=document.getElementById('n1').value;
    var c2=document.getElementById('n2').value;
    var c3=document.getElementById('n3').value;
    var c4=document.getElementById('n4').value;
    var c5=document.getElementById('n5').value;

    var Dados = [];
    Dados.push(n1,n2,n3,n4,n5);
    Dados.reverse(); 

    document.getElementById('n1').value=Dados[0];
    document.getElementById('n2').value=Dados[1];
    document.getElementById('n3').value=Dados[2];
    document.getElementById('n4').value=Dados[3];
    document.getElementById('n5').value=Dados[4];
}

/*Questão 8*/
function valor(qual) {
    if (qual == "cpf") {
        document.form.cpf.style.display = "block";
        document.form.cnpj.style.display = "none";
        document.form.date.style.display = "block";
    }
    if (qual == "cnpj") {
        document.form.cpf.style.display = "none";
        document.form.cnpj.style.display = "block";
        document.form.date.style.display = "none";
    }
}
function CheckNumber(value) {
    if (value.trim() !== "") {
        var regra=/^[0-9]+$/;
        if (value.match(regra)) {
            return;
        }
        else {
            document.getElementById('Ce').value = "";
            alert("Apenas números");
        }
    }
}

/*Questão 9*/
function Intercalar() {
    document.getElementById('x3').value = "";

    var c1 = document.getElementById('i1').value;
    var c2 = document.getElementById('i2').value;

    if (c1.length < c2.length) {
        var result = c2.length;
    } else {
        var result = c1.length;
    }
    for (i = 0; i < result; i++) {
        document.getElementById('i3').value += c1.substring(i, i + 1) + c2.substring(i, i + 1);
    }
}