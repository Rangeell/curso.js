// VARIABLES
// VARIABLES - text
var textAno = document.querySelector('#iano')

// VARIABLES - checkbox 
var textMas = document.querySelector('#imas')
var textFem = document.querySelector('#ifem')

// VARIABLES - button & result text
var button = document.querySelector('#button')
var res = document.querySelector('#res')

var imgDiv = document.querySelector('.image')
var img = document.querySelector('img')


button.addEventListener('click', yearImageChange)
function yearImageChange() {
    // VARIABLES - year
    var bornYear = Number(textAno.value)
    var agora = new Date()
    var newYear = agora.getFullYear()

    var idade = newYear - bornYear

    // CONDITIONS year results
    if (bornYear == 0) {
        res.innerHTML = 'Informe sua idade.'
        alert('Você precisa informar sua idade. Verifique os dados tente novamente.')
    } else if (bornYear > newYear || bornYear < 1900) {  
        alert('Data inválida. Siga as instruções do texto.')
        res.innerHTML = 'Informe uma data válida entre 1.900 e o ano atual.'
    } else if (!textFem.checked && !textMas.checked) {
        res.innerHTML = 'Informe seu sexo.'
        alert('Você precisa informar seu sexo. Verifique os dados tente novamente.')
    } else {
        // CONDITIONS image change

        res.innerHTML = `Você tem ${idade} anos.`
        imgDiv.style.display = 'block'
        if (idade >= 60 && textFem.checked) {
            img.src = 'images/old-woman.jpg'
            img.alt = 'Imagem de uma senhora de óculos escuros observando o horizonte em um belo dia '
        } else if (idade >= 60 && textMas.checked) {
            img.src = 'images/old-man.jpg'
            img.alt = 'Imagem de um senhor de idade, vestindo um chapéu e óculos de grau, a observar o horizonte'
        } else if (idade < 60 && textMas.checked) {
            img.src = 'images/young-boy.jpg'
            img.alt = 'Imagem de um jovem rapaz bem vestido, sentado em um mural e observando o horizonte'
        } else if (idade < 60 && textFem.checked) {
            img.src = 'images/young-girl.jpg'
            img.alt = 'Imagem de uma garota jovem de braços cruzados e sorrindo'
        }
    }
}




