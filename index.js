/* 
npm è il gestore ufficiale dei moduli (pacchetti) per NodeJS.
Viane installto durante l'installazione di NodeJS

npm serve a:
- Installare pacchetti
- aggiornare pacchetti
- disinstallare pacchetto 
- gestire le versioni dei pacchetti
*/

/* 
(1)
inizializzazione della app, digitando da temrinale la seguetne istruzione:

npm init -y

(2)
Installiamo il MICRO framework express JS
ci posizioniamo nella cartella di lavoro, tramite terminale, e digitiamo sul prompt la seguente istruzione:

npm install express
*/

// ============ installazione di nodemon =============================
/* 
questo pacchetto ci permette di evitare di interrompere e rilanciare il serve node, ogni qualvolta modificahimo il file js di lancio

Per installare il apcchetto, eseguire il seguente comando da terminale:

npm install --save-dev nodemon

l'opzione --save-dev permette di inidcare nel fail packge.json che questo pacchetto viene utilizzato solo in fase di sviluppo, in maniera tale che in caso di trasferimento della app su un altro server o pc, tale pacchetto non venga installato 
*/



// carica il modulo express per renderlo disponibile in questo file
const express = require('express');
const path = require('path');

// creaimo un oggetto chaimato app che recepisce tutti i metodi e le prorpiet di express
const app = express();
const porta = 3000;

/* 
le buone pratiche ci consigliano di nominare la cartella che deve contenere risorse STATICHE con il nome public
*/

// imposta la cartella per i file statici, tutti i file presenti, anche quelli che si troveranno all'itnerno di eventuali sottocartelle, verrano considerati da expressJS come risorse statiche

app.use(  express.static('public')  );

// ============= implementazione del codice per usare il templeting EJS ============================

/* 
per installare ejs, inserire nel termianle, posizionandoci nella cartella di lavoro:

ejs = embedded Javascript

npm install ejs


*/

// il metodo set() serve a configurare le funzionalità di Express JS e node, la riga seguente indica a Express quale sarà il percorso assoluto della cartella che conterrà i file dinamici
app.set('views', path.join(__dirname, 'views'));


// indicazione di quale deve essere il motore di templating da  utilizzare (previa installazione del pacchetto corrisponde)
app.set('view engine', 'ejs');

// ==============================

let arr = ['Pippo', 'Topolino', 'Paperino', 'Pluto'];

app.get('/', (richiesta, risposta) => {

     // il metodo render, che appartiene al Express, può, oltre a indicare il nome del file da inviare al browser rispetto alla rotta, inviare delle variabili che possono essere definite in questo (index.js)
     risposta.render('home.ejs', {nome : 'Andrea', cognome: 'Visicchio'})

});

app.get('/prodotti', (richiesta, risposta) => {

     risposta.render('prodotti.ejs', {personaggi : arr})
})

app.get('/i-nostri-servizi', (richiesta, risposta) => {
     risposta.render('servizi.ejs')
})

app.get('/contatti', (richiesta, risposta) => {
     risposta.render('contatti.ejs')
})

app.get('*', (richiesta, risposta) => {
     risposta.render('404.ejs')
})




// app.get('/', (richiesta, risposta) => {
//      risposta.sendFile(   `${__dirname}/public/home.html`   );
// });

// // rotta per visualizzare la pagina prodotti.html, che verrà caricata quando l'utente digiterà sul proprio browser la url http://localhost:3000/prodotti
// app.get('/prodotti', (richiesta, risposta) => {
//      risposta.sendFile(   `${__dirname}/public/prodotti.html`   );
// });


// // rotta per visulaizzare la pagina servizi.html
// app.get('/i-nostri-servizi', (richiesta, risposta) => {
//      risposta.sendFile(  `${__dirname}/public/servizi.html`  )
// })


// // rotta per visualizzare la pagina contatti.html, che verrà caricata quando l'utente digiterà sul proprio browser la url http://localhost:3000/about
// app.get('/about', (richiesta, risposta) => {
//      risposta.sendFile(   `${__dirname}/public/contatti.html`   );
// });


// app.get('*', (richiesta, risposta) => {
//      risposta.sendFile(   `${__dirname}/public/404.html`   );
// });


app.listen(porta);

/* 
EJS è un template engine supportato da Node

Templating => serve a definire un pattern che si ripete in più pagine e che noi possiamo facilmente modificare il suo contenuto, la modifica verrà eseguita solo una volta perchè tutti i file che rapppresenta le diverse pagine del sito si riferiranno a questo pattern
*/
