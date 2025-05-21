// desafio 1
console.log('boas vindas')

// desafio 2
let nome = 'Rafael'
console.log(nome)

// desafio 3
let nome2 = 'Rafael'
alert(nome2)

// desafio 4
let resposta = prompt('Qual a Linguagem que mais gosta?')
    console.log(resposta)

// desafio 5
let valor1 = 10
let valor2 = 20
let resultado = valor1 + valor2
    console.log(`A soma de ${valor1} + ${valor2} é ${resultado}`)

// desafio 6
let valor3 = 1223
let valor4 = 1220
let resultado1 = valor3 - valor4
    console.log(`A diferença entre ${valor3} e ${valor4} é ${resultado1}`)

// desafio 7
let idade = prompt('Informe sua idade')

if(idade >= 18){
    console.log('maior de idade')
}else{
    console.log('Menor de Idade, vaza!')
}

// desafio 8
let numero = prompt('Informe um número')

if(numero > 0){
    console.log('Positivo')
}else if(numero < 0){
    console.log('negativo')
}else{
    console.log('zero')
}

// desafio 9
let inicio = 1

while(inicio <= 10){
    console.log(inicio ++)
}

// desafio 10
let nota = prompt('Informe a Nota de 0 a 10')

if(nota >= 7){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

// desafio 11
console.log(Math.random())

// desafio 12
console.log(parseInt(Math.random()*10))

// desafio 13
console.log(parseInt(Math.random()*1000))