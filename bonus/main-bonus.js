/* Live coding */

/* pari o dispari:
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari. 


Tools
- prompt per chiedere il valore all'utente
- prompt per inserimento numero
- const e let
- Math random, Math floor
- If else
- % operatore modulo per il resto (js operators)
- Alert

*/

// Preaparazione

// Raccolta dati
const userChoise = prompt('Scegli pari o dispari, Es [Pari, Dispari]') 
console.log(userChoise);

const userNumber = Number(prompt('Inserire un valore numerico compreso tra 1 e 9, Es [1 2 3 4 ecc.]'))
console.log(userNumber);

//Azioni
//Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);


//Somma numero dell'utente con il numero casuale del computer
const somma = userNumber + pcNumber
console.log(somma);


//Verificare se il numero è pari e se l'utente ha scelto pari dichiarare l'utente come vincitore, altrimenti vince in computer.
console.log(somma%2);
console.log(somma%2 === 0);


if (somma%2 === 0 && userChoise == 'pari') {
    alert('Hai vinto!')
} else if (somma%2 === 1 & userChoise == 'dispari') {
    alert('Hai vinto!')
} else {
    alert('Hai perso!')}
