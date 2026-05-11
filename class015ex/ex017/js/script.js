let button = document.querySelector('input[type="button')
button.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    let txtNumber = document.querySelector('#inumber')
    let txtTabuada = document.querySelector('#itabuada')

    txtTabuada.innerHTML = ''
    
    if (txtNumber.value.length == '') {
        alert('Você precisa digitar um número para gerarmos a tabuada!')
    } else {
        let number = Number(txtNumber.value)
        for (let mult = 1; mult <= 10; mult++) {
            txtTabuada.innerHTML += `${number} x ${mult} = ${number * mult}\n`
        }
    }

}