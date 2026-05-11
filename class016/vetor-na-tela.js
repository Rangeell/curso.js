let valores = [8, 1, 7, 4, 2, 9]
/*
FORMA TRADICIONAL
for (let contagem = 0; contagem < valores.length; contagem++) {
    console.log(`A posição ${contagem} tem o valor ${valores[contagem]}`)
    }
*/


valores.sort()
console.log(valores.indexOf(10))
// valores.push(10)
// console.log(`A variável valores possui ${valores.length} posições`)


// FORMA SIMPLIFICADA exclusiva para arrays e objects
for (let contagem in valores) {
    console.log(`A posição ${contagem} tem o valor ${valores[contagem]}`)
}