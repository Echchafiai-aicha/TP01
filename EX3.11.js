const readlineSync = require('readline-sync');
//EX 3.11
const mot2 = readlineSync.question('Entrez un mot : ');
const motInverse2 = mot2.split('').reverse().join('');
if (mot2 === motInverse2) {
    console.log(`"${mot2}" est un palindrome.`);
} else {
    console.log(`"${mot2}" n'est pas un palindrome.`);
}
