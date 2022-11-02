/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// I principali DataType sono:
let nome = "Hello"; /* Stringhe: contengono un dato di tipo Testuale, le virgolette servono ad idenficarle come stringa */
let età = 30; /* Numero: contengono un dato di tipo Numerico, in questo caso non avremo bisogno di aggiungere le virgolette */
let maggiorenne = true; /* Boolean: i booleani possono assumere 2 valori, o true o false */
let dati = [1,2,'hello', false]; /* Array: contengono una lista di dati che possono essere di diverso tipo, questi dati vengono richiamati facendo riferimento alla loro posizione, e vengono riconosciuti con la parentesi quadra */
let pizza = {
  tipo: 'margherita',
  prezzo: 5
}; /* Oggetti: contengono una lista di coppie nome: valore, può contenere un dato di qualsiasi tipo e viene riconosciuta con la parentesi graffa  */
console.log("===============Es.1================")
console.log(typeof(nome), (nome));
console.log(typeof(età), (età));
console.log(typeof(maggiorenne), (maggiorenne));
console.log(typeof(dati), (dati));
console.log(typeof(pizza), (pizza));
console.log("===============Es.2================")

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Vanessa';
console.log(typeof(myName), (myName));
console.log("===============Es.3================")

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//opzione1
function somma(num1,num2){
  return num1 + num2;
}
console.log(somma(12,20));
//opzione2
let addizione = 12 + 20;
console.log(addizione)
console.log("===============Es.4================")


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(typeof(x), (x));
console.log("===============Es.5================")


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Riassegnazione
myName = 'Oteng'
console.log(myName);

//Dimostrazione construtto Const
const num3 = 52;
//num3 = 25; //Provando a riassegnare una Costante da un Error
console.log("===============Es.6================")



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//opzione1
function sottrai(num4,x){
  return num4 - x;
}
console.log(sottrai(4,x));

//opzione2
let sottrazione = 4 - x ;
console.log(sottrazione);
console.log("===============Es.7================")


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john';
let name2 = 'John';

if(name1 == name2){
   console.log(true);
}else{
  console.log(false);//False
}

if(name1 == name2.toLowerCase()){
  console.log(true);//True
}else{
  console.log(false);
}
