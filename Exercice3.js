
const readlineSync = require('readline-sync');
//EX 3.1
let x = readlineSync.questionInt('Entrez la valeur de x : ');
let y = readlineSync.questionInt('Entrez la valeur de y : ');
let add =x+y;
x=y;y=add-x;
console.log(" x = "+ x);
console.log("y= " + y);
//EX 3.2


let chaine1 = readlineSync.question('Entrez une chaîne de caractères  : ');
let nombre1= Number(chaine1);
console.log(`La chaîne "${chaine1}" convertie en nombre est : ${nombre1}`);
console.log(`Type de la variable : ${typeof nombre1}`);

//EX 3.3
let nombre2 = 10;
console.log(`Valeur initiale de nombre : ${nombre2}`);
nombre2 += 5;
console.log(`Après augmentation de 5 : ${nombre2}`);
nombre2 -= 3;
console.log(`Après diminution de 3 : ${nombre2}`);

//EX 3.4
const age2= readlineSync.questionInt('Entrez votre âge : ');
const estAdulte = age2 >= 18;
console.log(`La personne est adulte : ${estAdulte}`);
 
//EX 3.5
const mot = readlineSync.question('Entrez un mot : ');
console.log(`La longueur du mot "${mot}" est : ${mot.length}`);

//EX 3.6
const chaine2= readlineSync.question('Entrez une chaîne de caractères : ');
if (chaine2.length >= 3) {
    console.log(`Le troisième caractère de "${chaine2}" est : ${chaine2[2]}`);
} else {
    console.log('La chaîne est trop courte pour avoir un troisième caractère.');
}
//EX 3.7

const PI = 3.14159;
console.log(`La valeur de PI est : ${PI}`);
try {
    PI = 3.14; 
    console.log(`Nouvelle valeur de PI : ${PI}`);
} catch (error) {
    console.log('Erreur : Impossible de modifier une constante.');
}

//EX 3.8
const prixHT = parseFloat(readlineSync.question('Entrez le prix hors taxe : '));
const tauxTVA = parseFloat(readlineSync.question('Entrez le taux de TVA (en %) : '));
const prixTTC = prixHT * (1 + tauxTVA / 100);
console.log(`Le prix TTC est : ${prixTTC.toFixed(2)}`);

//EX 3.9
const prefixe = readlineSync.question('Entrez le préfixe de la facture : ');
const numeroBase = readlineSync.question('Entrez le numéro de base : ');
const suffixe = readlineSync.question('Entrez le suffixe : ');
const numeroFacture = `${prefixe}-${numeroBase}-${suffixe}`;
console.log(`Le numéro de facture complet est : ${numeroFacture}`);

//EX 3.10
const mot1 = readlineSync.question('Entrez un mot : ');
const motInverse = mot1.split('').reverse().join('');
console.log(`Le mot inversé est : ${motInverse}`);

//EX 3.11
const mot2 = readlineSync.question('Entrez un mot : ');
const motInverse2 = mot2.split('').reverse().join('');
if (mot2 === motInverse2) {
    console.log(`"${mot2}" est un palindrome.`);
} else {
    console.log(`"${mot2}" n'est pas un palindrome.`);
}

//EX 3.12
const note1 = parseFloat(readlineSync.question('Entrez la première note : '));
const coeff1 = parseFloat(readlineSync.question('Entrez le coefficient de la première note : '));

const note2 = parseFloat(readlineSync.question('Entrez la deuxième note : '));
const coeff2 = parseFloat(readlineSync.question('Entrez le coefficient de la deuxième note : '));

const note3 = parseFloat(readlineSync.question('Entrez la troisième note : '));
const coeff3 = parseFloat(readlineSync.question('Entrez le coefficient de la troisième note : '));
const moyennePonderee = (note1 * coeff1 + note2 * coeff2 + note3 * coeff3) / (coeff1 + coeff2 + coeff3);
console.log(`La moyenne pondérée est : ${moyennePonderee.toFixed(2)}`);

//EX 3.13
const heures = parseInt(readlineSync.question('Entrez le nombre d\'heures : '));
const minutes = parseInt(readlineSync.question('Entrez le nombre de minutes : '));
const secondes = parseInt(readlineSync.question('Entrez le nombre de secondes : '));
const totalSecondes = heures * 3600 + minutes * 60 + secondes;
console.log(`La durée totale en secondes est : ${totalSecondes}`);

//EX 3.14
const prenom = readlineSync.question('Entrez votre prénom : ');
const anneeNaissance = readlineSync.question('Entrez votre année de naissance : ');
const motDePasse = `${prenom}${anneeNaissance}!`;
console.log(`Votre mot de passe est : ${motDePasse}`);