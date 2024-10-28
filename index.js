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

// creaimo un oggetto chaimato app che recepisce tutti i metodi e le prorpiet di express
const app = express();
const porta = 3000;

/* 
le buone pratiche ci consigliano di nominare la cartella che deve contenere risorse STATICHE con il nome public
*/

// imposta la cartella per i file statici, tutti i file presenti, anche quelli che si troveranno all'itnerno di eventuali sottocartelle, verrano considerati da expressJS come risorse statiche
app.use(  express.static('public')  );

app.get('/', (richiesta, risposta) => {

     risposta.sendFile(   `${__dirname}/public/home.html`   );

});

// rotta per visualizzare la pagina prodotti.html, che verrà caricata quando l'utente digiterà sul proprio browser la url http://localhost:3000/prodotti
app.get('/prodotti', (richiesta, risposta) => {

     risposta.sendFile(   `${__dirname}/public/prodotti.html`   );

});

// rotta per visualizzare la pagina contatti.html, che verrà caricata quando l'utente digiterà sul proprio browser la url http://localhost:3000/about
app.get('/about', (richiesta, risposta) => {

     risposta.sendFile(   `${__dirname}/public/contatti.html`   );

});


app.get('*', (richiesta, risposta) => {

     risposta.sendFile(   `${__dirname}/public/404.html`   );

});



/* app.get('/', function(req, res) {

            res.send('Ciao dalla nuova app fatta con express JS')

        }
); */

/* app.get('/', (req, res) => {

     res.send('Ciao dalla nuova app fatta con express JS');
     
}); */



app.listen(porta);


