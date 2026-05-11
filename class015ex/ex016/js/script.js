// VARIABLES AREA

// Buttom
var button = document.querySelector('input[type="button"]')
button.addEventListener('click', Contar)

// Select text boxes
var txtInicio = document.querySelector('#iinicio')
var txtFim = document.querySelector('#ifim')
var txtPasso = document.querySelector('#ipasso')

// Select p#contar
var info = document.querySelector('#contar')
info.innerText = "Preparando contagem..."

var contando = document.querySelector('#contando')

// FUNCTION AREA

// Contar
function Contar() {
    var inicio = Number(txtInicio.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)

    if (inicio == 0) {
        info.innerHTML = 'Impossível contar sem um valor de início! Escolha um número.'
    } else if (inicio > fim) {
        alert('O número de início não pode ser maior que número de fim')
        info.innerHTML = "O número de início não pode ser maior que o número de fim."
    } else if (passo < 1) {
        alert('Passo inválido! Considerando passo 1')
        passo++
    } else {
        info.innerHTML = ``
        contando.innerHTML = 'Contando..'
        for (inicio; inicio <= fim; inicio += passo) {
            info.innerHTML += `${inicio} 👉`
        }
        info.innerHTML += '🏁'
    }
}
