let button = document.querySelector('#button')
let res = document.querySelector('#res')

let dynamicElements = {
    h2: document.createElement('h2'),
    p1: document.createElement('p')
}

res.append(
    dynamicElements.h2,
    dynamicElements.p1
)

button.addEventListener('click', function () {
    year = prompt('Qual ano você quer verificar?')

    res.style.display = 'block'
    dynamicElements.h2.innerHTML = `Analisando o ano de ${year}...`

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        dynamicElements.p1.innerHTML = `O ano de ${year} <mark>É BISSEXTO ✅</mark>`
    } else {
        dynamicElements.p1.innerHTML = `O ano de ${year} <mark>NÃO É BISSEXTO ❌</mark>`
        let mark = document.querySelector('mark')

        mark.style.backgroundColor = 'rgba(255, 0, 0, 0.403)'
        mark.style.borderColor = 'red'
    }
})