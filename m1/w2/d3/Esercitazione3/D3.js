/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
console.log("===============Es.1================")

function es1(num3, num4){
  
  if(num3 > num4){
    return(+num3+ ' è più grande di '+num4);
  }if(num3 < num4){
    return(+num4+ ' è più grande di '+num3);
  }else{
    return('i due numeri sono uguali')
  }
}
console.log(es1(36, 10));

console.log("===============Es.2================")

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es2(num5){
  
  if(num5 !== 5){
    return(+num5+ ' : not equal');
  }else{
    return(+num5+ ' : equal');
  }
}
console.log(es2(8));
console.log("===============Es.3================")


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es3(num6){
  if(num6 % 5){
    return(+num6+ ' : non divisibile per 5');

  }else{
    return(+num6+ ' : divisibile per 5');
  }
}
console.log(es3(10));
console.log("===============Es.4================")


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es4(num1, num2){
  let somma = num1 + num2;
  let sottrai = num1 - num2;
  if(num1==8){
    return('Numero 1 è = 8');
  }if (num2==8) {
    return('Numero 2 è = 8');
  }if(somma==8){
    return('La somma di: ' +num1+ '+' +num2+ ' è 8');
  }if(sottrai==8){
    return('La sottrazione di: ' +num1+ '-' +num2+' è 8');
  }
  
}
console.log(es4(4,8));
console.log("===============Es.5================")


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es5(totalShoppingCart){
  let promo = 'Spedizione Gratuita';
  const costoSpedizione = 10;
  if (totalShoppingCart >= 50){
    return('Utente ha il diritto alla: ' +promo);
  }else{
    return('I costo totale dei tuoi prodotti non supera 50 quindi il costo della Spedizione è: ' +costoSpedizione);
    

  }
}
console.log(es5(66));
console.log("===============Es.6================")


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es6(totalShoppingCart){
  let promo = 'Spedizione Gratuita';
  let blackFriday = 20;
  const costoSpedizione = 10;
  if (totalShoppingCart >= 50 && totalShoppingCart*blackFriday/100 >= 50){
    return('Utente ha il diritto alla: ' +promo);
  }else{
    return('I costo totale dei tuoi prodotti non supera 50 quindi il costo della Spedizione è: ' +costoSpedizione);

  }
}
console.log(es6(50));
console.log("===============Es.7================")


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = [47, 36, 52];
numeri.sort(function(a, b){
  return a - b;
}).reverse;
console.log(numeri);
/*
let num7= 30;
let num8= 9;
let num9= 10;
if(num7 >= num8){
  if(num9 >= num7){
    console.log(num9, num7, num8);
  }else if(num9 >= num8){
  console.log(num7, num9, num8);
  }else{
  console.log(num7, num8, num9);
}
}else if(num9 >= num8){
  console.log(num9, num8, num7);
}else if(num8 >= num7){
  console.log(num8, num9, num7);
}else{
  console.log(num8, num7, num9);
}*/
console.log("===============Es.8================")


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es8(valore){
  if(typeof(valore) === 'number'){
  return(valore+ ' è di tipo : ' +typeof(valore));
  }else {
    return('il valore inserito non è di tipo number')
  }
}
console.log(es8(89));
console.log("===============Es.9================")


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function es9(num10){
  if(num10 % 2 == 0){
    return('il numero: ' +num10+ ' è pari');
  }else{
    return('il numero: ' +num10+ ' è dispari');

  }
}
console.log(es9(10));
console.log("===============Es.10================")


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
  if (val < 10 && val > 5) {
      console.log(val+ " : è Meno di 10");
    } else if (val < 5) {
      console.log(val+ " : è Meno di 5");
    } else {
      console.log(val+ " : è Uguale a 10 o maggiore");
    }
console.log("===============Es.11================")


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
};


/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';
console.log(me);
console.log("===============Es.12================")


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
console.log("===============Es.13================")

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2] ;
console.log(me.skills);
console.log("===============Es.14================")


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrayNum = [];
console.log(arrayNum,  'ArrayVuota');

arrayNum = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayNum);
console.log("===============Es.15================")


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arrayNum[9] = 100;
console.log(arrayNum);

