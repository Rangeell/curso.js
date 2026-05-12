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




// FUNCTION add number list
component[0].addEventListener('click', add)
let numbers = []
function add() {
    console.log(numbers)
    numberAdd = Number(component[3].value)
    // 1 Validation
    if (component[3].value.length === 0) {
        return alert('Você precisa adionar um número para ser analisado!')
    } else if (component[3].value > 100) {
        return alert('O número deve ser menor que 100!')
    } else if (numbers.indexOf(numberAdd) !== -1) {
        return alert(`O número ${numberAdd} já foi adicionado à lista! Escolha outro.`)
    } else {
        numbers.push(numberAdd)
        component[4].value += `Valor ${component[3].value} adicionado.\n`
    }
    
    
}

// FUNCTION clear
component[2].addEventListener('click', clear)
function clear() {
    component[4].value = ''
    numbers.length = 0
}


