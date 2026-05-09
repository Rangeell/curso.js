// FUNCTION - Year & image change
button.addEventListener('click', yearImageChange)
function yearImageChange() {

    // VARIABLES

    // VARIABLES - text
    var textAno = document.querySelector('#iano')

    // VARIABLES - checkbox 
    var textMas = document.getElementsByName('sexo')[0]
    var textFem = document.getElementsByName('sexo')[1]
    var genero = ''
    if (textMas.checked) {
        var genero = 'homem'
    } else {
        var genero = 'mulher'
    }

    // VARIABLES - button & result text
    var button = document.querySelector('#button')
    var res = document.querySelector('#res')

    // VARIABLES - Images
    var imgDiv = document.querySelector('.image')
    var img = document.querySelector('img')

    // VARIABLES - year
    var bornYear = Number(textAno.value)
    var agora = new Date()
    var newYear = agora.getFullYear()

    var idade = newYear - bornYear

    // CONDITIONS year results
    if (bornYear == 0) {
        res.innerHTML = 'Informe sua idade.'
        alert('Você precisa informar sua idade. Verifique os dados tente e novamente.')
        imgDiv.style.display = 'none'
    } else if (bornYear > newYear || bornYear < 1900) {
        alert('Data inválida. Siga as instruções do texto.')
        res.innerHTML = 'Informe uma data válida entre 1.900 e o ano atual.'
        imgDiv.style.display = 'none'
    } else if (!textFem.checked && !textMas.checked) {
        res.innerHTML = 'Informe seu sexo.'
        alert('Você precisa informar seu sexo. Verifique os dados e tente novamente.')
        imgDiv.style.display = 'none'
    } else {

        // CONDITIONS image change
        imgDiv.style.display = 'block'
        res.innerHTML = `Você tem ${idade} anos e é ${genero}!`
        if (idade >= 60 && textFem.checked) {
            img.src = 'images/old-woman.jpg'
            img.alt = 'Imagem de uma senhora de óculos escuros observando o horizonte em um belo dia'
        } else if (idade >= 60 && textMas.checked) {
            img.src = 'images/old-man.jpg'
            img.alt = 'Imagem de um senhor de idade, vestindo um chapéu e óculos de grau, a observar o horizonte'
        } else if (idade < 60 && textMas.checked) {
            img.src = 'images/young-boy.jpg'
            img.alt = 'Imagem de um jovem rapaz bem vestido, sentado em um mural e observando o horizonte'
        } else {
            img.src = 'images/young-girl.jpg'
            img.alt = 'Imagem de uma garota jovem de braços cruzados e sorrindo'
        }
    }
}




