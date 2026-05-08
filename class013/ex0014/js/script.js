var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

var textoHora = document.querySelector('#horaAtual')
var saudacao = document.querySelector('#saudacao')
var body = document.body


if (hora == 0) {
    textoHora.innerHTML = `Agora é meia-noite (${hora}h:${minuto}min).`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
} else if (hora == 1) {
    textoHora.innerHTML = `Agora é ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
} else if (hora > 1 && hora < 6) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa madrugada!'
    body.style.backgroundColor = 'var(--corNoite)'
} else if (hora >= 6 && hora < 12) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min `
    saudacao.innerHTML = 'Bom dia!'
    body.style.backgroundColor = 'var(--corDia)'
} else if (hora == 12) {
    textoHora.innerHTML = `Agora é meio dia (${hora}h:${minuto}min).`
    saudacao.innerHTML = 'Boa tarde!'
    body.style.backgroundColor = 'var(--corTarde)'
} else if (hora > 12 && hora <= 17) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa tarde!'
    body.style.backgroundColor = 'var(--corTarde)'
} else if (hora > 17) {
    textoHora.innerHTML = `Agora são ${hora}h:${minuto}min.`
    saudacao.innerHTML = 'Boa noite!'
    body.style.backgroundColor = 'var(--corNoite)'
}


