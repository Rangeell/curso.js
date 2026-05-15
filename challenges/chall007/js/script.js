price = Number(prompt('Antes de mais nada. Quanto está a cotação do do dólar agora?'))

let button = document.querySelector('#normal')
let res = document.querySelector('#res')
let p1 = document.getElementsByTagName('p')[1]
let dynamicElements = {
    h2: document.createElement('h2'),
    p2: document.createElement('p')
}

button.addEventListener('click', function (converser) {
    money = Number(prompt('Quantos R$ você tem na carteira atualmente?'))

    p1.remove()
    let dólar = money / price

    res.append(
        dynamicElements.h2,
        dynamicElements.p2
    )

    dynamicElements.h2.innerHTML = `Saldo atual: ${money.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.`
    
    dynamicElements.p2.innerHTML = `Com o saldo de ${money.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, você pode adquir ${dólar.toLocaleString("pt-BR", {style: "currency", currency: "USD"})}`
})