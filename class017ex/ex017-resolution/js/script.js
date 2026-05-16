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

// FUNCTION add number list
let numbers = []

function isNumero(n) {
    return Number(n) <= 100
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1
}

component[3].addEventListener('keydown', function(enter) {
    if (enter.key === 'Enter') {
        enter.preventDefault()
        add()
        analise()
    }
})

component[0].addEventListener('click', add)
function add() {
    let numberAdd = Number(component[3].value)

    // Validation
    if (component[3].value.length === 0) {
        alert('Você precisa adionar um número para ser analisado!')
    } else if (!isNumero(component[3].value)) {
        alert('O número deve ser menor que 100!')
    } else if (inLista(component[3].value, numbers)) {
        alert(`O número ${numberAdd} já foi adicionado à lista! Escolha outro.`)
    } else {
        numbers.push(numberAdd)
        component[4].value += `Valor ${component[3].value} adicionado.\n`
        component[3].value = ''
        component[3].focus()
    }
}

// FUNCTION analise
component[1].addEventListener('click', analise)
function analise() {

    // Validation
    if (numbers.length === 0) {
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

        // HIGHER/LOWER number - SUM - MEDIA
        let higher = numbers[0]
        let lower = numbers[0]
        let sum = 0
        for (let i in numbers) {
            if (numbers[i] > higher) {
                higher = numbers[i]
            }
            if (numbers[i] < lower) {
                lower = numbers[i]
            }
            sum += numbers[i]
        }
        let media = sum / numbers.length

        component[5].appendChild(dynamicParagraphs[1])
        component[5].appendChild(dynamicParagraphs[2])

        dynamicParagraphs[1].innerHTML = `O maior número informado foi ${higher}.`
        dynamicParagraphs[2].innerHTML = `O menor número informado foi ${lower}.`

        component[5].appendChild(dynamicParagraphs[3])
        dynamicParagraphs[3].innerHTML = `Somando todos os valores, temos ${sum}`

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