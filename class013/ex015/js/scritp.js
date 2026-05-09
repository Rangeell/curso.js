// VARIABLES
var textAno = document.querySelector('#iano')
console.log(textAno)
var textMas = document.querySelector('#imas')
console.log(textMas)
var textFem = document.querySelector('#ifem')
console.log(textFem)

var ano = Number(textAno.value)
console.log(ano)
var Mas = textMas.value
var Fem = textFem.value
var button = document.querySelector('#button')
var res = document.querySelector('#res')

button.addEventListener('click', calcIdade)

function calcIdade() {
    var idade = 2026 - ano
    res.innerHTML = `A sua idade é ${idade}`
}