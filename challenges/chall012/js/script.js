let button = document.querySelector('#button')
let res = document.querySelector('#res')

let dynamicElements = {
    h2: document.createElement('h2'),
    p1: document.createElement('p'),
    p2: document.createElement('p'),
    p3: document.createElement('p'),
    p4: document.createElement('p')
}

res.append(
    dynamicElements.h2,
    dynamicElements.p1,
    dynamicElements.p2,
    dynamicElements.p3,
    dynamicElements.p4
)

button.addEventListener('click', function () {
    let beforePrice = Number(prompt('Qual era o preço anterior do produto?'))
    let currentPrice = Number(prompt('Qual é o preço atual do produto?'))

    res.style.display = 'block'

    dynamicElements.h2.innerHTML = 'Analisando os valores informados...'

    dynamicElements.p1.innerHTML = `O produto custava ${beforePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e agora custa ${currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`

    if (currentPrice === beforePrice) {
        dynamicElements.p2.innerHTML = "Não houve alterações no valor do produto."
    } else {

        let txtCaro = 'caro'
        let txtSubiu = 'subiu'
        let txtCima = 'cima'

        if (currentPrice < beforePrice) {
            txtCaro = 'barato'
            txtSubiu = 'desceu'
            txtCima = 'baixo'
        }

        dynamicElements.p2.innerHTML = `Hoje o produto está mais ${txtCaro}.`

        let difference = Math.abs(currentPrice - beforePrice)
        let porcent = difference / beforePrice * 100

        dynamicElements.p3.innerHTML = `O preço ${txtSubiu} ${difference.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em relação ao anterior.`

        dynamicElements.p4.innerHTML = `Uma variação de ${porcent.toFixed(2)}% para ${txtCima}.`
    }
})