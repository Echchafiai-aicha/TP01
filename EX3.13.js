const readlineSync = require('readline-sync');
//EX 3.13
const heures = parseInt(readlineSync.question('Entrez le nombre d\'heures : '));
const minutes = parseInt(readlineSync.question('Entrez le nombre de minutes : '));
const secondes = parseInt(readlineSync.question('Entrez le nombre de secondes : '));
const totalSecondes = heures * 3600 + minutes * 60 + secondes;
console.log(`La durée totale en secondes est : ${totalSecondes}`);