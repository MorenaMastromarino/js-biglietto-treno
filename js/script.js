/*
  1 inizializzare variabili chilometri, età
  2 calcolo prezzo biglietto (0.21 € al km)
  3 sconti 20% minorenni - 40% over 65
  4 output con 2 decimali  
  BONUS
  1 controllare validità dati
  2 'SCONTO20'
    - prompt codice sconto
    - -20% se ha 20 anni o meno
    - output se ha più di 20 anni
    - output se sbaglia codice  
*/

const km = parseInt(prompt('Quanti chilometri devi percorrere?'));
const age = prompt('Quanti anni hai?');
const sconto20 = prompt('Inserisci il codice sconto');

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

console.log('Prezzo pieno', ticketPrice.toFixed(2));


if (age < 18){
  ticketPrice = (km * 0.21) - (km * 0.21 * 0.20);
}else if (age > 65){
  ticketPrice = (km * 0.21) - (km * 0.21 * 0.40);
}


let finalPrice = ticketPrice;

if(sconto20 === 'SCONTO20' && age <= 20){
  finalPrice = ticketPrice - (ticketPrice * 0.20);
}


console.log('Prezzo senza sconto20', ticketPrice.toFixed(2));
console.log('Prezzo dopo sconto20', finalPrice.toFixed(2));

//output
let sconto20Msg = '';

if(sconto20 === 'SCONTO20' && age > 20){
  sconto20Msg = 'Codice non valido per la tua fascia di età'
}else if(sconto20 !== 'SCONTO20'){
  sconto20Msg = 'Codice non valido'
}


let outputString = 
`
  Il prezzo del tuo biglietto è: <strong>${finalPrice.toFixed(2)} &euro;</strong><br>
  ${sconto20Msg}
`

if(!datiValidi){
  outputString = 
  `
   <strong>Errore! ${errorMsg}</strong>
  `
}

document.getElementById('output').innerHTML = outputString;






