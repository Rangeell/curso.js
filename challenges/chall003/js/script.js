let button = document.querySelector('div')
console.log(button)

button.addEventListener('click', calc)
function calc() {
    let number = Number(prompt('Digite um número qualquer'))

    let antecessor = number - 1
    let sucessor = number + 1

    alert(`Antes de ${number}, temos o número ${antecessor}.\n Depois de ${number}, temos o número ${sucessor}.`)
}