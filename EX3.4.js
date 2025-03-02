const readlineSync = require('readline-sync');
//EX 3.4
const age2= readlineSync.questionInt('Entrez votre âge : ');
const estAdulte = age2 >= 18;
console.log(`La personne est adulte : ${estAdulte}`);