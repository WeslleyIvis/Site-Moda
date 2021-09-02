document.title = "Cadastro"

function validar() {

    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var confirmSenha = document.getElementById('confirmSenha')
    var telefone = document.getElementById('telefone');
    var sexo = document.getElementById('sexo');
    var newsletter = document.getElementById('newsletter').checked;



    // verificar se o nome está vazio

    if (nome.value == "") {
        nameErro.innerHTML = '<p> Campo obrigatorio! &times; </p>'

        //Deixa o input com o focus
        nome.focus()

        //Retorna a função e não olha as outras linhas
        return;
    } 

    
    if (sobrenome.value == "") {
        document.getElementsByName('sobrenome')[0].placeholder = 'Este campo é obrigatorio '
        sobrenome.focus()
        return
    }

    if (email.value == "") {    
        emailErro.innerHTML = '<p> Estre campo precisar ser preenchido. &times;</p>'
        email.focus()
        return
    }

    if (senha.value == "") {
        senhaErro.innerHTML = '<p> Campo obrigatório &times; </p>'
        senha.focus()
        return
    }


    if (confirmSenha.value == "") {
        confirmSenhaErro.innerHTML = '<p> A senha precisar ser confirmado &times;</p>'
        confirmSenha.focus();
        return

    }

    if (telefone.value == "") {
        telefoneErro.innerHTML = '<p> Este campo é obrigatiro </p>'
        telefone.focus()
        return
    }

    if (sexo.value == "") {
        alert("Campo Obrigatório")
        sexo.focus()
        return
    }

    alert('Informações enviadas')

    document.write(
        `<div> Nome: ${nome.value} <br>
        Sobrenome: ${sobrenome.value} <br>
        E-mail: ${email.value} <br>
        Senha: ${senha.value} <br>
        Telefone: ${telefone.value} <br>
        Sexo: ${sexo.value} </div>`)

}