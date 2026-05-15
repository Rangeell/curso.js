let button = document.querySelector('div')
console.log(button)

button.addEventListener('click', troco)
function troco() {
    let produto = prompt('Qual produto você está comprando?')
    let preço = Number(prompt('Quanto custo o produto que você está comprando?'))
    let pago = Number(prompt(`Qual valor que você deu para pagar o ${produto}?`))
    let troco = pago - preço

    alert(`Você comprou ${produto} que custou ${preço.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}.\nDeu ${pago.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} em dinheiro e vai rebecer ${troco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} de troco.\nVolte Sempre!`)
}