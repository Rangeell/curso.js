let button = document.querySelector('div')
console.log(button)
let divRes = document.querySelector('#res')
console.log(button, divRes)

let dynamicParagraphs = {
    h2: document.createElement('h2'),
    p1: document.createElement('p'),
    p2: document.createElement('p'),
}

button.addEventListener('click', function converter() {
    celsius = Number(prompt('Digite uma temperatura em °C (Celsius)'))

    fahrenheit = (celsius * 9 / 5) + 32
    kelvin = celsius + 273.15


    divRes.append(
        dynamicParagraphs.h2,
        dynamicParagraphs.p1,
        dynamicParagraphs.p2
    )

    dynamicParagraphs.h2.innerHTML = `A temperatura em ${celsius}°C, corresponde a...`
    dynamicParagraphs.p1.innerHTML = `${kelvin}°K (Kelvin).`
    dynamicParagraphs.p2.innerHTML = `${fahrenheit}°F (Fahrenheit).`
})