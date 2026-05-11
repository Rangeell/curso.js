// VARIABLES AREA

// Buttom
let button = document.querySelector('input[type="button"]')
button.addEventListener('click', Contar)

// Select text boxes
let txtInicio = document.querySelector('#iinicio')
let txtFim = document.querySelector('#ifim')
let txtPasso = document.querySelector('#ipasso')

// Select p#contar
let info = document.querySelector('#contar')
info.innerText = "Preparando contagem..."

let contando = document.querySelector('#contando')

// FUNCTION AREA

// Contar
function Contar() {
    let inicio = Number(txtInicio.value)
    let fim = Number(txtFim.value)
    let passo = Number(txtPasso.value)

    if (passo < 1) {
        contando.innerHTML = ''
        alert('Passo inválido! Considerando passo 1')
        passo = 1
    } else if (inicio == 0) {
        info.innerHTML = 'Impossível contar sem um valor de início! Escolha um número.'
    } if (inicio > fim) {
        contando.innerHTML = 'Contando..'
        info.innerHTML = ''
        for (inicio; inicio >= fim; inicio -= passo) {
            info.innerHTML += `${inicio} 👉`
        }
        info.innerHTML += '🏁'
    } else {
        info.innerHTML = ``
        contando.innerHTML = 'Contando..'
        for (inicio; inicio <= fim; inicio += passo) {
            info.innerHTML += `${inicio} 👉`
        }
        info.innerHTML += '🏁'
    }
}
