let button = document.querySelector('#button')
let res = document.querySelector('#res')

let dynamicElements = {
    h2: document.createElement('h2'),
    equaçãoAtual: document.createElement('p'),
    calculoRealizado: document.createElement('p'),
    valorDeDelta: document.createElement('p')
}

res.append(
    dynamicElements.h2,
    dynamicElements.equaçãoAtual,
    dynamicElements.calculoRealizado,
    dynamicElements.valorDeDelta
)

button.addEventListener('click', function () {
    a = Number(prompt('Qual é o valor de a'))
    b = Number(prompt('Qual é o valor de b'))
    c = Number(prompt('Qual é o valor de c'))

    delta = b ** 2 - 4 * a * c

    res.style.display = 'block'
    dynamicElements.h2.innerHTML = 'Resolvendo Bhaskara!'

    dynamicElements.equaçãoAtual.innerHTML = `A equação atual é ${a}x + ${b}x + ${c} = 0.`

})