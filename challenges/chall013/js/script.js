let button = document.querySelector('#button')
let tds = document.querySelectorAll('tbody td')
let tableData = {
    nameLocal: tds[0],
    score1Local: tds[1],
    score2Local: tds[2],
    averageLocal: tds[3],
    situationLocal: tds[4]
}

function formatScore(score) {
    return score.toFixed(1).toString().replace('.', ',')
}
button.addEventListener('click', function () {
    let name = prompt('Qual é o nome do(a) aluno(a)?')
    let score1 = Number(prompt(`Qual a primeira nota de ${name}?`))
    let score2 = Number(prompt(`Qual a segunda nota de ${name}?`))
    let average = (score1 + score2) / 2

    tableData.nameLocal.textContent = `${name}`
    tableData.score1Local.textContent = `${formatScore(score1)}`
    tableData.score2Local.textContent = `${formatScore(score2)}`
    tableData.averageLocal.textContent = `${formatScor(average)}`

    if (average <= 3) {
        tableData.situationLocal.textContent = 'Reprovado'
        tableData.situationLocal.className = 'reproved' 
    } else if (average > 3 && average <= 6) {
        tableData.situationLocal.textContent = 'Recuperação'
        tableData.situationLocal.className = 'recovery'
    } else {
        tableData.situationLocal.textContent = 'Aprovado'
        tableData.situationLocal.className = 'approved'
    }
})
