/*
  1 inizializzare variabili chilometri, età
  2 calcolo prezzo biglietto (0.21 € al km)
  3 sconti 20% minorenni - 40% over 65
  4 output con 2 decimali  
  BONUS
  1 controllare validità dati
*/

const km = parseInt(prompt('Quanti chilometri devi percorrere?'));
const age = prompt('Quanti anni hai?');

let datiValidi = true;
let errorMsg = '';

//controllo validità km
if(isNaN(km)){
  datiValidi = false;
  errorMsg = 'Inserisci un numero di chilometri valido.';
}


//controllo validità età
if(isNaN(age)){
  datiValidi = false;
  errorMsg = 'Inserisci un\'età valida.';
}

console.log('dati validi', datiValidi);
console.log('messaggio errore', errorMsg);

//calcolo prezzo biglietto
let ticketPrice = km * 0.21;


if (age < 18){
  ticketPrice = (km * 0.21) - (km * 0.21 * 0.20);
}else if (age > 65){
  ticketPrice = (km * 0.21) - (km * 0.21 * 0.40);
}

console.log('Prezzo non arrotondato', ticketPrice);
console.log('Prezzo arrotondato', ticketPrice.toFixed(2));


//output
let outputString = 
`
  Il prezzo del tuo biglietto è: <strong>${ticketPrice.toFixed(2)} &euro;</strong>
`

if(!datiValidi){
  outputString = 
  `
   <strong>Errore! ${errorMsg}</strong>
  `
}

document.getElementById('output').innerHTML = outputString;






