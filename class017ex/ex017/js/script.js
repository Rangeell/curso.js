// GLOBAL VARIABLES
let component =
    [document.querySelector('#buttonAdd'),
    document.querySelector('#buttonAnalise'),
    document.querySelector('#buttonClear'),
    document.querySelector('#inumber'),
    document.querySelector('#ianalisador'),
    document.querySelector('#result')
    ]

let dynamicParagraphs = [
    document.createElement('p'),
    document.createElement('p'),
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

    // Validation
    if (component[3].value.length === 0) {
        return alert('Você precisa adionar um número para ser analisado!')
    } else if (numberAdd > 100) {
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

    dynamicParagraphs[0].innerHTML = ''
    dynamicParagraphs[1].innerHTML = ''
    dynamicParagraphs[2].innerHTML = ''
    dynamicParagraphs[3].innerHTML = ''
    dynamicParagraphs[4].innerHTML = ''

    // Validation
    if (component[4].value === '') {
        alert('Não há números para analisar')
    } else {
        let textNumber = 'números'
        let textCadastro = 'cadastrados'

        if (numbers.length == 1) {
            textNumber = 'número'
            textCadastro = 'cadastrado'
        }

        // TOTAL numbers
        component[5].appendChild(dynamicParagraphs[0])

        dynamicParagraphs[0].innerHTML = `Ao todo temos ${numbers.length} ${textNumber} ${textCadastro}.`

        // HIGHER number
        let higher = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > higher) {
                higher = numbers[i]
            }
        }

        component[5].appendChild(dynamicParagraphs[1])

        dynamicParagraphs[1].innerHTML = `O maior número informado foi ${higher}.`

        // LOWER number
        let lower = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < lower) {
                lower = numbers[i]
            }
        }

        component[5].appendChild(dynamicParagraphs[2])

        dynamicParagraphs[2].innerHTML = `O menor número informado foi ${lower}.`

        // SUM
        let sum = 0
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]

        }

        component[5].appendChild(dynamicParagraphs[3])

        dynamicParagraphs[3].innerHTML = `Somando todos os valores, temos ${sum}`

        // MEDIA
        let media = sum / numbers.length
        
        let textValue = 'dos valores'
        if (numbers.length == 1) {
            textValue = 'do valor'
        }

        component[5].appendChild(dynamicParagraphs[4])

        dynamicParagraphs[4].innerHTML = `A média ${textValue} ${textCadastro} é ${media.toFixed(2).replace('.', ',')}`
    }
}

// FUNCTION clear
component[2].addEventListener('click', clear)
function clear() {
    numbers.length = 0
    component[3].value = ''
    component[4].value = ''
    component[5].innerHTML = ''
}