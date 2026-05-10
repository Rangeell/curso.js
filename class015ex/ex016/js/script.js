/* var inicio = 2
var fim = 10
var passo = 2

console.log(`${inicio}`)
for (inicio; inicio <= fim; inicio += passo) {
    var soma = inicio + passo
    console.log(`👉${soma}`)
}
*/


var botao = document.querySelector('input[type="button"]')
botao.addEventListener('click', Contar)

function Contar() {
    var txtInicio = document.querySelector('#iinicio')
    var inicio = txtInicio.value
    
    var txtFim = document.querySelector('#ifim')
    var fim = txtFim.value

    var txtPasso = document.querySelector('#ipasso')
    var passo = txtPasso.value

    
    // console.log(`${inicio} ${fim} ${passo}`)
}

