let button = document.querySelector('#button')
let res = document.querySelector('#res')
let dynamicElements = {
    h2: document.createElement('h2'),
    p1: document.createElement('p'),
    p2: document.createElement('p'),
    p3: document.createElement('p'),
}

function finalPrice(originalPrice = 0) {
    return originalPrice - (originalPrice * 10 / 100)
}

button.addEventListener('click', function () {
    let = product = prompt('Qual produto você está comprando?')
    let = originalPrice = Number(prompt(`Qual é o preço de ${product}?`))

    let discount = originalPrice * 10 / 100

    res.append(
        dynamicElements.h2,
        dynamicElements.p1,
        dynamicElements.p2,
        dynamicElements.p3
    )

    dynamicElements.h2.innerHTML = `Calculando o desconto de 10% para ${product}.`

    dynamicElements.p1.innerHTML = `O preço original era ${originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`

    dynamicElements.p2.innerHTML = `Você acaba de ganhar ${discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%)!`

    dynamicElements.p3.innerHTML = `No fim, você vai pagar ${finalPrice(originalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${product}.`
})