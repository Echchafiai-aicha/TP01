const readlineSync = require('readline-sync');
//EX 3.5
const mot = readlineSync.question('Entrez un mot : ');
console.log(`La longueur du mot "${mot}" est : ${mot.length}`);
