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
    document.getElementsByTagName('section')[0],
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p')
    ]
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

    component[6].innerHTML = ''
    component[7].innerHTML = ''
    component[8].innerHTML = ''

    if (component[4].value === '') {
        alert('Não há números para analisar')
    } else {
        let textNumber = 'números'
        let textCadastro = 'cadastrados'

        if (numbers.length == 1) {
            textNumber = 'número'
            textCadastro = 'cadastrado'
        }


        component[5].appendChild(component[6])

        component[6].innerHTML = `Ao todo temos ${numbers.length} ${textNumber} ${textCadastro}.`

        // higher number
        let higher = numbers[0]
        for (let higherStart = 0; higherStart < numbers.length; higherStart++) {
            if (numbers[higherStart] > higher) {
                higher = numbers[higherStart]
            }
        }

        component[5].appendChild(component[7])

        component[7].innerHTML += `O maior número informado foi ${higher}.`

        // lower number
        let lower = numbers[0]
        for (let lowerStart = 0; lowerStart < numbers.length; lowerStart++) {
            if (numbers[lowerStart] < lower) {
                lower = numbers[lowerStart]
            }
        }

        component[5].appendChild(component[8])

        component[8].innerHTML += `O menor número informado foi ${lower}.`
    }
}

// FUNCTION clear
component[2].addEventListener('click', clear)
function clear() {
    numbers.length = 0
    component[3].value = ''
    component[4].value = ''
    component[6].remove()
    component[7].remove()
    component[8].remove()

    component[6].innerHTML = ''
    component[7].innerHTML = ''
    component[8].innerHTML = ''
}


