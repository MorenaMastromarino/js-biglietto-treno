/*
  1 inizializzare variabili chilometri, età
  2 calcolo prezzo biglietto (0.21 € al km)
  3 sconti 20% minorenni - 40% over 65
  4 output con 2 decimali  
*/

const km = parseInt(prompt('Quanti chilometri devi percorrere?'));
const age = prompt('Quanti anni hai?');


let ticketPrice = km * 0.21


if (age < 18){
  ticketPrice = (km * 0.21) - (km * 0.21 * 0.20);
}else if (age > 65){
  ticketPrice = (km * 0.21) - (km * 0.21 * 0.40);
}

console.log('Prezzo non arrotondato', ticketPrice);
console.log('Prezzo arrotondato', ticketPrice.toFixed(2));

document.getElementById('output').innerHTML =
`
  Il prezzo del tuo biglietto è: <strong>${ticketPrice.toFixed(2)} &euro;</strong>
`





