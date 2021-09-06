document.title = "Cadastro"

$(function () {

    // a  Representa caracteres alfabéticos (letras) (A-Z,a-z)
    // a  Porém 'a' não permite acentuação nem ç 
    // 9  Representa caracteres numéricos (números) (0-9)
    // *  Representa caracteres alfanuméricos (letras e números) (A-Z,a-z,0-9)

    $('.mask-numeros').mask('9999999999'); //caracteres numéricos
    $('.mask-cpf').mask('999.999.999-99'); //CPF
    $('.phone_with_ddd').mask('(99) 99999-9999');
    $('.date').mask('99 / 99 / 9999')
});

// verificar se o nome está vazio
//Deixa o input com o focus
//Retorna a função e não olha as outras linha

function validar_nome() {
    let focar = document.getElementById('nome');

    let nome = document.getElementById('nome').value;
    let re = /[^a-zà-ú]/gi
    let validaNome = nome.match(re)


    if (nome = "") {
        nameErro.innerHTML = '<p> Campo obrigatorio &times; </p>';

        focar.focus()
        return false
    }
    else if (validaNome || !nome) {
        nameErro.innerHTML = '<p> Apenas letras! &times; </p>';

        focar.focus();
        return false;
    }
    nameErro.innerHTML = '<p></p>';
    return true;
}

function validar_sobrenome() {
    let sobrenome = document.getElementById('sobrenome');
    if (sobrenome.value == "") {

        document.getElementsByName('sobrenome')[0].placeholder = 'Este campo é obrigatorio '
        sobrenome.focus()
        return false
    }

    return true
}

function validar_email() {
    let email = document.getElementById('email');
    if (email.value == "") {

        emailErro.innerHTML = '<p> Campo obrigatório &times; </p>'
        email.focus()
        return false
    }
    emailErro.innerHTML = ''
    return true
}

function validar_cpf() {
    let cpf = document.getElementById('cpf');
    if (cpf.value == "" || cpf.value == null) {

        cpfErro.innerHTML = '<p> Esse campo precisa ser preenchido! <p>'
        cpf.focus()
        return false
    }
    cpfErro.innerHTML = ''
    return true
}

function validar_senha() {
    let senha = document.getElementById('senha');
    if (senha.value == "" || senha.value.length < 6) {

        senhaErro.innerHTML = '<p> A senha precisa ter no mínino 6 digitos contento pele menos uma letra maiúscula e uma minuscula &times; </p>'
        senha.focus()
        return false
    }
    senhaErro.innerHTML = ''
    return true
}

function validar_cofirmSenha() {
    let confirmSenha = document.getElementById('confirmSenha')
    if (confirmSenha.value == "") {
        confirmSenhaErro.innerHTML = '<p> A senha precisar ser confirmado &times;</p>'
        confirmSenha.focus();
        return false

    } else if (confirmSenha.value != senha.value) {
        confirmSenhaErro.innerHTML = '<p> A senha precisa ser igual </p>'
        confirmSenha.focus();
        return false
    }
    confirmSenhaErro.innerHTML = ''
    return true
}

function validar_nascimento() {
    let nascimento = document.getElementById('nascimento')
    if (nascimento.value = "") {
        nascimentoErro.innerHTML = '<p> Este campo é obrigatório </p>'
        nascimento.focus();
        return false
    }
    nascimentoErro.innerHTML = ''
    return true
}

function validar_tel() {
    if (telefone.value == "") {
        let telefone = document.getElementById('telefone');
        telefoneErro.innerHTML = '<p> Este campo é obrigatiro </p>'
        telefone.focus()
        return
    }
}


function validarTudo() {
    validar_nome() && validar_sobrenome() && validar_email()
        && validar_cpf() && validar_senha() && validar_cofirmSenha()
        && validar_nascimento() && validar_tel()
}

/*
function validar() {

    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var confirmSenha = document.getElementById('confirmSenha')
    var telefone = document.getElementById('telefone');
    var sexo = document.getElementById('sexo');
    var newsletter = document.getElementById('newsletter').checked;

    emailErro.innerHTML = '<p> Estre campo precisar ser preenchido. &times;</p>'
    email.focus()

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
        emailErro.innerHTML = '<p> Campo obrigatório &times; </p>'
        email.focus()
        return
    }

    if (cpf.value == "") {
        cpfErro.innerHTML = '<p> Esse campo precisa ser preenchido! <p>'
        cpf.focus()
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


}
*/