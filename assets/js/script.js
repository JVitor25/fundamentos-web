/*
acesso por (JS é CaseSensitive):
    Tag: getElementByTagName()
    Id: getElementByID()
    Nome:  getElementsByName()
    Classe: getElementsByClassName()
    Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
// let imgAnime = document.getElementById('imagem')

nome.style.width = '100%'
email.style.width = '100%'
 
function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido.'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido.'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido.'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido.'
        txtEmail.style.color = 'green'
        emailOK = true
    } 
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'texto é muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
} 

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário correntamente antes de enviar...')
    }
}

/* Ainda vou deixar funcional - dar zoom nas imagem dos animes
function imgZoom(){
    imgAnime.style.width = '1153px'
    imgAnime.style.heigth = '647px'
}

function imgNormal(){
    imgAnime.style.width = '853px'
    imgAnime.style.heigth = '479px'
}
*/