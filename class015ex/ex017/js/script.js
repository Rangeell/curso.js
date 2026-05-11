var txtNumber = document.querySelector('#inumber')
var txtDiv = document.querySelector('#itabuada')

var button = document.querySelector('input[type="button')



button.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    txtDiv.innerHTML = ''

    var number = Number(txtNumber.value)
    var mult = 1

    if (number == '') {
        alert('Você precisa digitar um número para gerarmos a tabuada!')
    } else {
        for (mult; mult <= 10; mult++) {
            var res = number * mult
            txtDiv.innerHTML += `${number} x ${mult} = ${res}\n`
        }
    }

}