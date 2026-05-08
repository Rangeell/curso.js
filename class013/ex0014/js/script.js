// VARIABLES ARE

// Time variables
var agora = new Date()
var hora = 18
var minuto = agora.getMinutes()

// Select variables
var body = document.body
var textoHora = document.querySelector('#horaAtual')
var saudacao = document.querySelector('#saudacao')
var bordaImagemNigth = document.querySelectorAll('img')[2]
var bordaImagemAfternoon = document.querySelectorAll('img')[1]
console.log(bordaImagemAfternoon)

// Select day variables
var day = document.querySelector('#day')
var afternoon = document.querySelector('#afternoon')
var night = document.querySelector('#night')

// Hours conditions
if (hora == 0) {
    textoHora.innerHTML = `Agora é meia-noite (${hora}h:${minuto}min).`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
    day.style.display = 'none'
    night.style.display = 'block'
    bordaImagemNigth.style.borderColor = 'var(--corNoite)'
    bordaImagemNigth.style.outlineColor = 'var(--corNoite)'
} else if (hora == 1) {
    textoHora.innerHTML = `Agora é ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
    day.style.display = 'none'
    night.style.display = 'block'
    bordaImagemNigth.style.borderColor = 'var(--corNoite)'
    bordaImagemNigth.style.outlineColor = 'var(--corNoite)'
} else if (hora > 1 && hora < 6) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
    day.style.display = 'none'
    night.style.display = 'block'
    bordaImagemNigth.style.borderColor = 'var(--corNoite)'
    bordaImagemNigth.style.outlineColor = 'var(--corNoite)'
} else if (hora >= 6 && hora < 12) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min `
    saudacao.innerHTML = 'Bom dia!'
    body.style.backgroundColor = 'var(--corDia)'
} else if (hora == 12) {
    textoHora.innerHTML = `Agora é meio dia (${hora}h:${minuto}min).`
    saudacao.innerHTML = 'Boa tarde!'
    body.style.backgroundColor = 'var(--corTarde)'
    day.style.display = 'none'
    afternoon.style.display = 'block'
    bordaImagemAfternoon.style.borderColor = 'var(--corTarde)'
    bordaImagemAfternoon.style.outlineColor = 'var(--corTarde)'
} else if (hora > 12 && hora <= 17) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa tarde!'
    body.style.backgroundColor = 'var(--corTarde)'
    day.style.display = 'none'
    afternoon.style.display = 'block'
    bordaImagemAfternoon.style.borderColor = 'var(--corTarde)'
    bordaImagemAfternoon.style.outlineColor = 'var(--corTarde)'
} else if (hora > 17) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa noite!'
    body.style.backgroundColor = 'var(--corNoite)'
    day.style.display = 'none'
    night.style.display = 'block'
    bordaImagemNigth.style.borderColor = 'var(--corNoite)'
    bordaImagemNigth.style.outlineColor = 'var(--corNoite)'
}


