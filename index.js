console.log("Hello World!");

let nome = 'Danii';

console.log(nome);

let idade = 25;
let altura = 1.75;

console.log('Nome: ' + nome + ' - Idade: ' + idade + ' anos');
console.log(`Nome: ${nome} - Idade: ${idade} anos`);

let trabalha = true;

console.log(trabalha);
console.log('Trabalha: ' + (trabalha === true ? 'Sim' : 'Não'));

if (trabalha === true){
    console.log('Trabalha: Sim');
}else{
    console.log('Trabalha: Não');
}

const sangue = 'B+';
idade = 36;
// sangue = 'A-'
console.log(idade);

console.log(
    'vNome: ' + typeof(nome) + '\n' +
    'vIdade: ' + typeof(idade) + '\n' +
    'vAltura: ' + typeof(altura) + '\n' +
    'vTrabalha: ' + typeof(trabalha) + '\n' +
    'vConstante: ' + typeof(sangue) 
);

let endereco = {
    'rua' : 'Brasil',
    'num' : 108,
    'bairro' : 'centro',
    'cidade' : 'tupã',
    'uf' : 'SP',
    'mora' : true
}

console.log(endereco);
console.log(typeof(endereco));

let frutas = ['banana', 'mamão', 'maçã'];
console.log(frutas[0]);

let velha = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(velha[1][1]);