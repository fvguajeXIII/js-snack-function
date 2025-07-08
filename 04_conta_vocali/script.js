/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(str) {
  const vocali = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let trovate = [];
  for (let i = 0; i < str.length; i++) {
    if (vocali.includes(str[i].toLowerCase())) {
      count++;
      trovate.push(str[i]);
    }
  }
  return {count, trovate};
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);
console.log(risultato.count, risultato.trovate.join(`, `));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)