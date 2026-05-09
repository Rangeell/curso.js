// VARIABLES ARE
// window.addEventListener('load', carregar)
window.addEventListener('load', carregar)
function carregar() {
    
    // VARIABLES - Select (DOM)
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    
    
    // VARIABLES - time
    var textoHora = document.querySelector('#horaAtual')
    var saudacao = document.querySelector('#saudacao')
    var body = document.body
    var img = document.querySelector('img')
    
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

}