let entrada = require('prompt-sync')();  

// let idade = parseInt(entrada('Digite sua idade: '));

// let idadeInt = parseInt(idade);

// if (idade < 18) {
//     console.log('Menor');
// }else if (idade === 18) {
//     console.log('Tem 18');
// }else {
//     console.log('Maior');
// }

// console.log(`Sua idade é ${idade}`);

// let num = parseInt(entrada('Digite um número para visualizar a tabuada!'));

// let cont = 1;

// while (cont <= 10) {
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
//     cont++;
// }

// for (let cont = 1; cont <= 10; cont++) {
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
// }

// const senha = '123456';
// let cont = 0;
// do{
//     if (cont === 3) {
//         break;
//     }
//     cont++;
//     var senhaDig = entrada('Digite a  senha para acessar o sistema: ');
// }while (senha !== senhaDig);

// if (cont >= 3) {
//     console.log('Acesso não autorizado');
// }else{
//     console.log('Acesso autorizado');
// }

// entrada();

let senha = '123456'
let snCorreta = false;

for (let index = 1; index <= 3; index++) {
    let senhaDig = entrada('Digite a  senha para acessar o sistema: ');

    if (senha === senhaDig) {
        snCorreta = true;
        break;
    }  
}

    console.log(snCorreta ? 'Acesso autorizado' : 'Acesso negado');
    entrada();

// let sn = '123456';

// let snDg = entrada('Digite a senha para acessar o sistema: ');

// while (sn ==! snDg) {
//     snDg = entrada('Digite a senha para acessar o sistema: ')
// }


//prompt-sync: entrada de dados
//log: saída de dados
// !==  verifica se a senha digitada esta correta
