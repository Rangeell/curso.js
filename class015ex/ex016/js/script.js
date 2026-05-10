/* var inicio = 2
var fim = 10
var passo = 2

console.log(`${inicio}`)
for (inicio; inicio <= fim; inicio += passo) {
    var soma = inicio + passo
    console.log(`👉${soma}`)
}
*/

// VARIABLES AREA

// Buttom
var button = document.querySelector('input[type="button"]')
button.addEventListener('click', Contar)

// Select text boxes
var txtInicio = document.querySelector('#iinicio')
var txtFim = document.querySelector('#ifim')
var txtPasso = document.querySelector('#ipasso')

// FUNCTION AREA

// Contar
function Contar() {
    var inicio = txtInicio.value
    var fim = txtFim.value
    var passo = txtPasso.value

    // Test
    // console.log(`${inicio} ${fim} ${passo}`)
}

