/* 
let buttonAdd = document.querySelector('#buttonAdd')
let buttonFished = document.querySelector('#buttonFished')
let analisador = document.querySelector('#ianalisador')

*/

let component =
    [document.querySelector('#buttonAdd'),
    document.querySelector('#buttonAnalise'),
    document.querySelector('#buttonClear'),
    document.querySelector('#inumber'),
    document.querySelector('#ianalisador'),
    document.getElementsByTagName('p')[2]]

console.log(component)

// FUNCTION add number list
component[0].addEventListener('click', add)
let numbers = []
function add() {
    console.log(numbers)
    let numberAdd = Number(component[3].value)
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

// FUNCTION analise
component[1].addEventListener('click', analise)
function analise() {

    if (component[4].value === '') {
        alert('Não há números para analisar')
    } else {
        let textoNumero = 'números'
        if (numbers.length == 1) {
            textoNumero = 'número'
        }
            component[5].innerHTML = `Ao todo temos ${numbers.length} ${textoNumero} cadastrados.<br>`

            // higher number
            let higher = numbers[0]
            for (let higherStart = 0; higherStart < numbers.length; higherStart++) {
                if (numbers[higherStart] > higher) {
                    higher = numbers[higherStart]
                }
            }
            component[5].innerHTML += `O maior número informado foi ${higher}. <br>`
            
            // lower number
            let lower = numbers[0]
            for (let lowerStart = 0; lowerStart > numbers.length; lowerStart++) {
                if (numbers[lowerStart] < lower) {
                    lower = numbers[lowerStart]
                }
            }
            component[5].innerHTML += `O menor número informado foi ${lower}. <br>`
        }
    }

    // FUNCTION clear
    component[2].addEventListener('click', clear)
    function clear() {
        component[5].innerHTML = ''
        component[4].value = ''
        numbers.length = 0
    }


