const readlineSync = require('readline-sync');
//EX 3.12
const note1 = parseFloat(readlineSync.question('Entrez la première note : '));
const coeff1 = parseFloat(readlineSync.question('Entrez le coefficient de la première note : '));

const note2 = parseFloat(readlineSync.question('Entrez la deuxième note : '));
const coeff2 = parseFloat(readlineSync.question('Entrez le coefficient de la deuxième note : '));

const note3 = parseFloat(readlineSync.question('Entrez la troisième note : '));
const coeff3 = parseFloat(readlineSync.question('Entrez le coefficient de la troisième note : '));
const moyennePonderee = (note1 * coeff1 + note2 * coeff2 + note3 * coeff3) / (coeff1 + coeff2 + coeff3);
console.log(`La moyenne pondérée est : ${moyennePonderee.toFixed(2)}`);