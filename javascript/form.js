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
        nameErro.innerHTML = '<p> Campo obrigatorio!</p>'

        //Deixa o input com o focus
        nome.focus()

        //Retorna a função e não olha as outras linhas
        return;
    } 

    
    if (sobrenome.value == "") {

        sobrenomeErro.innerHTML = '<p> Campo obrigatorio!</p>'

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

    /*
     _____            _           
    /  ___|          | |          
    \ `--.  ___ _ __ | |__   __ _ 
     `--. \/ _ \ '_ \| '_ \ / _` |
    /\__/ /  __/ | | | | | | (_| |
    \____/ \___|_| |_|_| |_|\__,_|
                                  
    */

    if (senha.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('Campo obrigatorio!')
        newInfo.appendChild(info);

        var campo = document.getElementById('senha-erro')
        campo.appendChild(newInfo)

        senha.focus()
        return
    }

    /*
 _____              __ _                _____            _           
/  __ \            / _(_)              /  ___|          | |          
| /  \/ ___  _ __ | |_ _ _ __ _ __ ___ \ `--.  ___ _ __ | |__   __ _ 
| |    / _ \| '_ \|  _| | '__| '_ ` _ \ `--. \/ _ \ '_ \| '_ \ / _` |
| \__/\ (_) | | | | | | | |  | | | | | /\__/ /  __/ | | | | | | (_| |
 \____/\___/|_| |_|_| |_|_|  |_| |_| |_\____/ \___|_| |_|_| |_|\__,_|
    */


    if (confirmSenha.value == "") {
        let newInfo = document.createElement('p')
        let info = document.createTextNode('A senha deve ser a mesma')
        newInfo.appendChild(info);

        var campo = document.getElementById('confirmSenha-erro');
        campo.appendChild(newInfo);

        confirmSenha.focus();
        return

    } else if (confirmSenha.value != senha) {

        let newInfo = document.createElement('p')
        let info = document.createTextNode('A senha deve ser a mesma')
        newInfo.appendChild(info);

        var campo = document.getElementById('confirmSenha-erro');
        campo.appendChild(newInfo);

        confirmSenha.focus();
        return
    }

    /*
 _____    _       __                 
|_   _|  | |     / _|                
  | | ___| | ___| |_ ___  _ __   ___ 
  | |/ _ \ |/ _ \  _/ _ \| '_ \ / _ \
  | |  __/ |  __/ || (_) | | | |  __/
  \_/\___|_|\___|_| \___/|_| |_|\___|
                                     
    */



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