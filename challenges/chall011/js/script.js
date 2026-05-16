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
    let a = Number(prompt('Qual é o valor de a'))
    let b = Number(prompt('Qual é o valor de b'))
    let c = Number(prompt('Qual é o valor de c'))

    let delta = b ** 2 - 4 * a * c

    res.style.display = 'block'
    dynamicElements.h2.innerHTML = 'Resolvendo Bhaskara!'

    dynamicElements.equaçãoAtual.innerHTML = `A equação atual é ${a}x² + ${b}x + ${c} = 0.`

    dynamicElements.calculoRealizado.innerHTML = `O cálculo realizado será: Δ = ${b}² - 4 · ${a} · ${c}`

    if (delta < 0) {
        dynamicElements.valorDeDelta.innerHTML = 'Não existem raízes reais (Δ < 0).'
    } else {
        let results = [
            (-b + Math.sqrt(delta)) / (2 * a),
            (-b - Math.sqrt(delta)) / (2 * a)
        ]
        dynamicElements.valorDeDelta.innerHTML = `x1 = ${results[0]}.<br> 
        x2 = ${results[1]}.<br>
        Δ = ${delta}.`
    }

})