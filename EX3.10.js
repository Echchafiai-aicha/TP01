const readlineSync = require('readline-sync');
//EX 3.10
const mot1 = readlineSync.question('Entrez un mot : ');
const motInverse = mot1.split('').reverse().join('');
console.log(`Le mot inversé est : ${motInverse}`);
