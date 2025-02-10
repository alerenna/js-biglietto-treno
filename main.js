/* 
Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


TOOLS

- prompt x età e km
- if
 */


const km = prompt('Quanti km vuoi percorrere?')
const età = prompt('Quanti anni hai?')
const costoKm = (0.21 * km)
const costoKmRounded = costoKm.toFixed(2)

console.log(costoKmRounded);

if (età <= 18) {
    alert('Il tuo biglietto costa € ' + (costoKmRounded - (costoKmRounded * 0.2)));
} else if (età >= 65) {
    alert('Il tuo biglietto costa € ' + (costoKmRounded - (costoKmRounded * 0.4)));
} else {
    alert('Il tuo biglietto costa € ' + costoKmRounded);
}



