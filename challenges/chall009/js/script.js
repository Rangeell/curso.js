let button = document.querySelector('#button')
let res = document.querySelector('#res')

let dynamicElements = {
    h2: document.createElement('h2'),
    p1: document.createElement('p'),
    p2: document.createElement('p'),
    p3: document.createElement('p')
}

res.append(
    dynamicElements.h2,
    dynamicElements.p1,
    dynamicElements.p2,
    dynamicElements.p3
)

function finalSal(n1 = 0, n2 = 0) {
    return n1 + (n1 * n2 / 100)
}

button.addEventListener('click', function () {
    let name = prompt('Qual o nome do funcionário?')

    let initialSal = Number(prompt(`Qual é o salário de ${name}?`))

    let percentage = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`))

    let increase = initialSal * percentage / 100

    res.style.display = 'block'

    dynamicElements.h2.innerHTML = `${name} recebeu um aumento salarial!`

    dynamicElements.p1.innerHTML = `O salário atual era ${initialSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`

    dynamicElements.p2.innerHTML = `Com um aumento de ${percentage}%, o salário vai aumentar ${increase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`

    dynamicElements.p3.innerHTML = `E a partir daí, ${name} vai passar a ganhar ${finalSal(initialSal, percentage).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`
})
