/* 
let buttonAdd = document.querySelector('#buttonAdd')
let buttonFished = document.querySelector('#buttonFished')
let analisador = document.querySelector('#ianalisador')

*/

let component = 
[document.querySelector('#buttonAdd'),
document.querySelector('#buttonFished'),
document.querySelector('#buttonClear'),
document.querySelector('#inumber'),
document.querySelector('#ianalisador')]


console.log(component)

component[0].addEventListener('click', add)
component[2].addEventListener('click', clear)


let numbers = []
function add() {
    console.log(numbers)
    // 1 Validation
    if (component[3].value.length == '') {
        return alert('Você precisa adionar um número')
    } else if (component[3].value > 100) {
        return alert('valor maior que 100')
    } else {
        numberAdd = Number(component[3].value)
        numbers.push(numberAdd)
    } 

    component[4].innerHTML += `Valor ${component[3].value} adicionado.\n`
    
}

function clear() {
    component[4].innerHTML = ''
    numbers.length = 0
}


