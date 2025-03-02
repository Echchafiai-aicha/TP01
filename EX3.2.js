const readlineSync = require('readline-sync');
//EX 3.2
let chaine1 = readlineSync.question('Entrez une chaîne de caractères  : ');
let nombre1= Number(chaine1);
console.log(`La chaîne "${chaine1}" convertie en nombre est : ${nombre1}`);
console.log(`Type de la variable : ${typeof nombre1}`);