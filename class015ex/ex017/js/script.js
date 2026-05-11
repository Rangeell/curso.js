let txtNumber = document.querySelector('#inumber')
let txtTabuada = document.querySelector('#itabuada')

let button = document.querySelector('input[type="button')



button.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    txtTabuada.innerHTML = ''
    let mult = 1
    
    if (txtNumber.value.length == '') {
        alert('Você precisa digitar um número para gerarmos a tabuada!')
    } else {
        let number = Number(txtNumber.value)
        for (mult; mult <= 10; mult++) {
            let res = number * mult
            txtTabuada.innerHTML += `${number} x ${mult} = ${res}\n`
        }
    }

}