// VARIABLES AREA

// Buttom
let button = document.querySelector('input[type="button"]')
button.addEventListener('click', Contar)

// Select p#contar
let info = document.querySelector('#contar')
info.innerText = "Preparando contagem..."

let contando = document.querySelector('#contando')

// FUNCTION AREA

// Contar
function Contar() {
    let txtInicio = document.querySelector('#iinicio')
    let txtFim = document.querySelector('#ifim')
    let txtPasso = document.querySelector('#ipasso')

    info.innerText = ''
    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        alert('[Erro] Faltam Dados')
        contando.innerHTML = ''
        info.innerHTML = 'Preencha os dados para realizar a contagem.'
    } else {
        contando.innerHTML = 'Contando: <br>' 
        let inicio = Number(txtInicio.value)
        let fim = Number(txtFim.value)
        let passo = Number(txtPasso.value)
        
        if (passo <= 0) {
            alert('Impossível conta! Considerando passo = 1')
            passo = 1
        }
        // Contangem crescente
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c+= passo) {
                contando.innerHTML += ` ${c} 👉`
            }
        } else {

            // Contagem regressiva
            for (let c = inicio; c >= fim; c-= passo) {
                contando.innerHTML += ` ${c} 👉`
            }
        }
        contando.innerHTML += `🏁`
    }
}