/*
aula 01:

*/
alert("Boa vindas, ao jogo do número secreto");
let numeroSecreto = 29;
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');

    //se chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        break;

    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : ' tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai acertou o número secretooo! ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`)
// }
/*

Desafio 01:
alert("Erro! Preencha todos os campos");
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro!Preencha todos os campos';
alert('mensagemDeErro');

let nome = 'Lua';

let nomeUsuario = prompt('Digite seu nome:');
if (nome == nomeUsuario) {
    alert('Lua');
};

let idade = 18;

let idadeUsuario = prompt('Digite sua idade:');
if (idadeUsuario >= 18) {
    alert('Pode tirar a habilitação');
} else {
    alert('Não pode tirar a habilitação');
};

*/

/*===============================================================================*/

/* aula02:*/
/*
Desafio02:

//dias da semana:

let diaDaSemana = prompt("Qual o dia da semana?");
if (diaDaSemana == 'sabado' || diaDaSemana == 'domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
};
 
//Negativo e Positivo:
// let numero = prompt('Digite seu número:');
// if (numero > 0) {
//     alert('positivo');
// } else {
//     alert('negativo');
// };


//pontuação:
// let pontuação = prompt('sua pontuação:');

// if (pontuação >= 100) {
//     alert('Parabéns, você venceu');
// } else {
//     alert('Tente novamente para ganhar');
// };

//saldo:

// let saldo = 200;
// let seuSaldo = prompt('Digite sua senha:');
//     alert(`seu saldo: ${saldo}`);




//nome: 

let nome = prompt('Digite eu nome:');
alert('seja bem vindo!' + nome);
*/

/*==============================================================*/

/*
Aula 03:
Desafio03:

   //0 => 10
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
};
    //10 => 0 
let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;   
};

    //Regressivo 6 => 0
let contador3 = 6;
contador = prompt("De 6 ate 0:");
while (contador3 >= 0) {
    alert(contador3);
    contador3--;
};

    //Progressivo 0 => 6
let contador4 = 0;
contador4 = prompt("de 0 ate 6:");
while (contador4 <= 6 ) {
    alert(contador4);
     contador4++;     
};
*/

/*==========================================*/

/* 
Aula 04:


*/














