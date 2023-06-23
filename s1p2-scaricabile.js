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
/*
I principali datatypes in JavaScript sono: number, string, boolean, null and undefined.
Ciò che determina il datatype di ogni variabile è il valore che attribuisco a destra dell'uguale.

Se a destra dell'uguale ho un numero, allora il datatype sarà di tipo number.
es) let numero = 13.332323 --> è un dt NUMBER

Se a destra dell'uguale ho un carattere/parola/frase/numero... racchiusi tra virgolette (o apici particolari ), allora il datatype sarà di tipo string. 
es) let myString = "La volpe 89" --> è un dt STRING

Se a destra dell'uguale ho le parole true oppure false senza apici di alcun genere, il datatype sarà di tipo boolean
es) let myBoolean = true --> è un dt BOOLEAN

Se a destra dell'uguale ho la parola null, il datatype sarà di tipo null e rappresenterà un contenitore vuoto
es) let vuota = null --> è un dt NULL 

Se non è presenta l'uguale si ha a che fare con il datatype undefined.
es) let unDefined
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
Un oggetto in JS è un insieme di elementi aventi una struttura chiave-valore che permette di contenere e modificare
più tipi semplici differenti (o altre classi). La struttura di un oggetto è la seguente:

const oggetto = {
    tipoSemplice1 : 12,
    tipoSemplice2 : "cane rosso",
    classe : {
        tipoSemplice3 : 23,
        tipoSemplice4 : "29volpi"
    },
    tipoSemplice5 : null
}

*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let a = 12
let b = 20
let c = a + b
*/ 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let x = 12
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let name = "Thomas"
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let x = 12
let subtraction = 4 - x
*/ 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let name1 = "john"
let name2 = "John"

let controllo = name1 == name2

console.log("Sono uguali?", controllo)
console.log("Adesso sono uguali?", controllo = name1.toLowerCase == name2.toLowerCase)
*/