// VARIABLES ARE

// VARIABLES - time
var agora = new Date()
var hora = 18
var minuto = agora.getMinutes()

// VARIABLES - Select
var body = document.body
var textoHora = document.querySelector('#horaAtual')
var saudacao = document.querySelector('#saudacao')
var img = document.querySelector('img')
// var bordaImagemAfternoon = document.querySelectorAll('img')[1]

// VARIABLES - Day Select
var day = document.querySelector('#day')
var afternoon = document.querySelector('#afternoon')
var night = document.querySelector('#night')

// CONDITIONS - Hours
if (hora == 0) {
    textoHora.innerHTML = `Agora é meia-noite (${hora}h:${minuto}min).`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
    
    img.style.borderColor = 'var(--corNoite)'
    img.style.outlineColor = 'var(--corNoite)'
    img.src = 'images/night.jpg'
    img.alt = 'Imagem de um anoitecer em uma cidade moderna'
} else if (hora == 1) {
    textoHora.innerHTML = `Agora é ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
    
    img.style.borderColor = 'var(--corNoite)'
    img.style.outlineColor = 'var(--corNoite)'
    img.src = 'images/night.jpg'
    img.alt = 'Imagem de um anoitecer em uma cidade moderna'
} else if (hora > 1 && hora < 6) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
    
    img.style.borderColor = 'var(--corNoite)'
    img.style.outlineColor = 'var(--corNoite)'
    img.src = 'images/night.jpg'
    img.alt = 'Imagem de um anoitecer em uma cidade moderna'
} else if (hora >= 6 && hora < 12) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min `
    saudacao.innerHTML = 'Bom dia!'
} else if (hora == 12) {
    textoHora.innerHTML = `Agora é meio dia (${hora}h:${minuto}min).`
    saudacao.innerHTML = 'Boa tarde!'
    body.style.backgroundColor = 'var(--corTarde)'

    img.style.borderColor = 'var(--corTarde)'
    img.style.outlineColor = 'var(--corTarde)'
    img.src = 'images/afternoon.jpg'
    img.alt = 'Imagem de um entardecer'
} else if (hora > 12 && hora <= 17) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa tarde!'
    body.style.backgroundColor = 'var(--corTarde)'
    
    img.style.borderColor = 'var(--corTarde)'
    img.style.outlineColor = 'var(--corTarde)'
    img.src = 'images/afternoon.jpg'
    img.alt = 'Imagem de um entardecer'
} else if (hora > 17) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa noite!'
    body.style.backgroundColor = 'var(--corNoite)'
    
    img.style.borderColor = 'var(--corNoite)'
    img.style.outlineColor = 'var(--corNoite)'
    img.src = 'images/night.jpg'
    img.alt = 'Imagem de um anoitecer em uma cidade moderna'
}


