let button = document.querySelector('div')
console.log(button)
let divRes = document.querySelector('#res')
console.log(button, divRes)

let dynamicParagraphs = {
    h2: document.createElement('h2'),
    p1: document.createElement('p'),
    p2: document.createElement('p'),
    p3: document.createElement('p'),
    p4: document.createElement('p'),
    p5: document.createElement('p'),
    p6: document.createElement('p')
}

button.addEventListener('click', converter)
function converter() {
    let number = Number(prompt('Digite uma ditância em metros (m)'))


    let txtMetro = (number === 1 ? 'metro' : 'metros')

    divRes.appendChild(dynamicParagraphs.h2)

    dynamicParagraphs.h2.innerHTML = `A distância de ${number} ${txtMetro}, corresponde a...`

    let medidas = {
        km: number / 1000,
        hm: number / 100,
        dam: number / 10,
        dm: number * 10,
        cm: number * 100,
        mm: number * 1000
    }

    divRes.append(
        dynamicParagraphs.p1,
        dynamicParagraphs.p2,
        dynamicParagraphs.p3,
        dynamicParagraphs.p4,
        dynamicParagraphs.p5,
        dynamicParagraphs.p6
    )

    dynamicParagraphs.p1.innerHTML = `${medidas.km.toString().replace('.', ',')} quilômetros (km).`

    dynamicParagraphs.p2.innerHTML = `${medidas.hm.toString().replace('.', ',')} hectômetros (hm).`

    dynamicParagraphs.p3.innerHTML = `${medidas.dam.toString().replace('.', ',')} decâmectros (dam).`

    dynamicParagraphs.p4.innerHTML = `${medidas.dm.toString().replace('.', ',')} decímetros(dm).`

    dynamicParagraphs.p5.innerHTML = `${medidas.cm.toString().replace('.', ',')} centímetros (cm).`

    dynamicParagraphs.p6.innerHTML = `${medidas.mm.toString().replace('.', ',')} milímetros (mm).`
}