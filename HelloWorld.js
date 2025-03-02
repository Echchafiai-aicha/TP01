const readline =require('readline-sync');
console.log("Hello world");
let prenom1=readline.question("entrez votre prenom");
console.log("hello",prenom1);


const readlineSync = require('readline-sync');


let prenom = readlineSync.question('Quel est votre prénom ? ');
console.log(`Bonjour, ${prenom} !`);

let age1= readlineSync.questionInt('Quel est votre âge ? ');
console.log(`Vous avez ${age} ans.`);
let taille = readlineSync.questionFloat('Quel est votre taille en mètres ? ');
console.log(`Vous mesurez ${taille} mètres.`);
