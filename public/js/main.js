console.log("Ciao a tutti, vi scrivo dal front-end, io sono eseguito dal browser dell'utente");

let bottone_cambia_stile = document.querySelector('#bottone_cambia_stile');
let tabella_contatti = document.querySelector('#tabella_contatti');


bottone_cambia_stile.addEventListener('click', () => {

    tabella_contatti.classList.toggle('table-striped');

})