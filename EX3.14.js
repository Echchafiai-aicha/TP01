const readlineSync = require('readline-sync');
//EX 3.14
const prenom = readlineSync.question('Entrez votre prénom : ');
const anneeNaissance = readlineSync.question('Entrez votre année de naissance : ');
const motDePasse = `${prenom}${anneeNaissance}!`;
console.log(`Votre mot de passe est : ${motDePasse}`);