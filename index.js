//mostra se o código ta funcionando no js
console.log("Hello World!");

//string
//let: variável que muda de valor
let nome = 'Danii';
console.log(nome);

//number
let idade = 25;
let altura = 1.75;

console.log('Nome: ' + nome + ' - Idade: ' + idade + ' anos');

//template strings: uso da crase
console.log(`Nome: ${nome} - Idade: ${idade} anos`); 


//boolean
let trabalha = true;
console.log(trabalha);

//operador ternário 
console.log('Trabalha: ' + (trabalha === true ? 'Sim' : 'Não')); 

if (trabalha === true){
    console.log('Trabalha: Sim');
}else{
    console.log('Trabalha: Não');
}

//string
const sangue = 'B+';
idade = 36;
//sangue = 'A-'//
console.log(idade);

//typeof: mostra o tipo da variável
console.log(
    'vNome: ' + typeof(nome) + '\n' +
    'vIdade: ' + typeof(idade) + '\n' +
    'vAltura: ' + typeof(altura) + '\n' +
    'vTrabalha: ' + typeof(trabalha) + '\n' +
    'vConstante: ' + typeof(sangue) 
);

//object
let endereco = {
    'rua' : 'Brasil',
    'num' : 108,
    'bairro' : 'centro',
    'cidade' : 'tupã',
    'uf' : 'SP',
    'mora' : true
};

console.log(endereco);
console.log(typeof(endereco));

//array '[ ]'
//array de uma dimensão
let frutas = ['banana', 'mamão', 'maçã'];
console.log(frutas[0]); 

//array de duas dimensões
let velha = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8]
];
console.log(velha[1][1]);
console.log(typeof(velha));

//operador ternário 
console.log((Array.isArray(velha)) ? 'Array' : 'Não é array'); 