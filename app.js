alert('Salve Rafa, seu sortudo!'); // escreve uma mensagem na tela
alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random()*1000 numeroMaximo)+1; // variável
console.log(numeroSecreto);

let chute;
let tentativa = 1;
//enquanto chute não for igual a numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); // abre um bloco para digitar com valor vazio
// aqui começa a validação
    if (chute == numeroSecreto) {
        break;  // para o programa após a condição for verdadeira
    } else {
        if(chute > numeroSecreto){
            alert(`O numero é menor que ${chute}`);
        } else {
            alert(`O numero é maior que ${chute}`);
        }
        //somar o número de tentativas até acertar tentativa +1
    } tentativa++; // para acrescentar +1 a cada interação
}

// outra forma de escrever if else
                                        // if           // else
let palavraTentativa = tentativa > 1 ? 'Tentativas' : 'Tentativa'
alert(`isso ai! você acertou o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`); // ${} usado para buscar valor de variavel com string
// aqui para identificar entre plural ou singular para o número de tentativas