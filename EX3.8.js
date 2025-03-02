const readlineSync = require('readline-sync');
//EX 3.8
const prixHT = parseFloat(readlineSync.question('Entrez le prix hors taxe : '));
const tauxTVA = parseFloat(readlineSync.question('Entrez le taux de TVA (en %) : '));
const prixTTC = prixHT * (1 + tauxTVA / 100);
console.log(`Le prix TTC est : ${prixTTC.toFixed(2)}`);