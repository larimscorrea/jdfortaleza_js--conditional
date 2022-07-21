/*Faça um Programa que peça dois números e imprima o maior deles.*/
let numberOne = prompt('Digite um número');
let numberTwo = prompt('Digite um número');

if(numberOne > numberTwo) {
    alert('O ' + numberOne + ' é maior que o ' + numberTwo);
} else(numberTwo > numberOne); {
    alert('O ' + numberTwo + ' é maior que o ' + numberOne);
}

/*Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo*/
let value = prompt('Digite um valor');

if(value >= 0) {
    alert('O ' + value + ' é um número positivo')
} else(value <= 0); {
    alert('O ' + value + ' é um número negativo');
}

/*Faça um Programa que leia três números e mostre o maior deles.*/
let numberOnee = prompt('Digite um número');
let numberTwoo = prompt('Digite um número');
let numberThree = prompt('Digite um número');

if(numberOnee > numberTwoo && numberOnee > numberThree) {
    alert('O ' + numberOnee + ' é maior que o ' + numberTwoo);
} if(numberTwoo > numberOnee && numberTwoo > numberThree) {
    alert('O ' + numberTwoo + ' é maior que o ' + numberOnee);
} else(numberThree > numberOnee && numberThree > numberTwoo); {
    alert('O ' + numberThree + ' é maior que o ' + numberOnee + ' e ' + numberTwoo)
}


/*Faça um Programa que verifique se uma letra digitada é "F" ou "M". 
Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.*/
let gender = prompt('Digite a letra inicial do seu gênero, sendo F-feminino, M-masculino');

if(gender == 'F', 'f') {
    alert('O gênero informado é o feminino')
} if(gender == 'M', 'm') {
    alert('O gênero informado é o masculino')
} else(gender == 'Default'); {
    alert('O gênero informado é inválido')
}

/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/
let turnStudy = prompt('Digite a letra inicial do turno em que estuda, sendo M-matutino, v-vespertino e n-noturno');

if(turnStudy == 'M', 'm') {
    alert('Bom dia')
} if(turnStudy == 'V', 'v') {
    alert('Boa tarde')
} else(turnStudy == 'N', 'n'); {
    alert('Boa noite')
}

/*Faça um Programa que leia três números e mostre o maior e o menor deles.*/
let numberOn = prompt('Digite um número');
let numberTw = prompt('Digite um número');
let numberThr = prompt('Digite um número');

if(numberOn > numberTw && numberThr < numberTw) {
    alert('O maior número é o ' + numberOn + ' e o menor número é o ' + numberThr)
} if(numberTw > numberOn && numberThr < numberOn) {
    alert('O maior número é o número ' + numberTw + ' e o menor número é o ' + numberThr)
} if(numberThr > numberOn && numberTw < numberOn) { 
    alert('O maior número é o número ' + numberTwo + ' e o menor número é o ' + numberTwo)
} if(numberOn > numberThr && numberTw < numberThr) {
    alert('O maior número é o ' + numberOn + ' e o menor número é o ' +numberTw)
} if(numberThr > numberTw && numberOn < numberTw) {
    alert('O maior número é o ' + numberThr + ' e o menor número é o ' + numberOn)
} else(numberTw > numberThr && numberOn < numberThr); {
    alert('O maior número é o ' + numberTw + ' e o menor número é o ' + numberOn) 
}
/* Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
let gradeOne = 1*prompt('Digite sua nota');
let gradeTwo = 1*prompt('Digite sua nota');
let result = ((gradeOne+gradeTwo)/2);

alert('A média do aluno é ' + (gradeOne + gradeTwo)/2); {
    if(result>=7) {
        alert('Aprovado')
    } if(result<7){
        alert('Reprovado')
    } else(result==10); {
        alert('Aprovado com distinção')
    }
}