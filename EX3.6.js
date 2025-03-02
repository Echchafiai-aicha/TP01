const readlineSync = require('readline-sync');
//EX 3.6
const chaine2= readlineSync.question('Entrez une chaîne de caractères : ');
if (chaine2.length >= 3) {
    console.log(`Le troisième caractère de "${chaine2}" est : ${chaine2[2]}`);
} else {
    console.log('La chaîne est trop courte pour avoir un troisième caractère.');
}