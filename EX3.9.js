const readlineSync = require('readline-sync');
//EX 3.9
const prefixe = readlineSync.question('Entrez le préfixe de la facture : ');
const numeroBase = readlineSync.question('Entrez le numéro de base : ');
const suffixe = readlineSync.question('Entrez le suffixe : ');
const numeroFacture = `${prefixe}-${numeroBase}-${suffixe}`;
console.log(`Le numéro de facture complet est : ${numeroFacture}`);