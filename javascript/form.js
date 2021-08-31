document.title = "Cadastro"

function validar() {

    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    var telefone = document.getElementById('telefone')
    var sexo = document.getElementById('sexo')
    var newsletter = document.getElementById('newsletter').checked;


    // verificar se o nome está vazio
    if (nome.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('Campo obrigatorio!')
        newInfo.appendChild(info);

        var campo = document.getElementById('nome-erro')
        campo.appendChild(newInfo)

        //Deixa o input com o focus
        nome.focus()

        //Retorna a função e não olha as outras linhas
        return;
    }

    if (sobrenome.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('Campo obrigatorio!')
        newInfo.appendChild(info);

        var campo = document.getElementById('sobrenome-erro')
        campo.appendChild(newInfo)
        sobrenome.focus()
        return
    }

    if (email.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('Campo obrigatorio!')
        newInfo.appendChild(info);

        var campo = document.getElementById('email-erro')
        campo.appendChild(newInfo)

        email.focus()
        return
    }

    if (senha.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('Campo obrigatorio!')
        newInfo.appendChild(info);

        var campo = document.getElementById('senha-erro')
        campo.appendChild(newInfo)

        senha.focus()
        return
    }

    if (telefone.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('Campo obrigatorio!')
        newInfo.appendChild(info);

        var campo = document.getElementById('telefone-erro')
        campo.appendChild(newInfo)

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