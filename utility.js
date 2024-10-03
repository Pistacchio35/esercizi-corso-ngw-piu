/*
Funzione che gestisce la lista della spesa chiedendo degli input da parte dell'utente
*/
function gestioneListaSpesa(lista, prodotto) {

    let scelta = "";
    let visualizza = "";

    while (true) {

        //nel caso la lista è vuota chiedo direttamente all'utente di inserire un prodotto
        if (lista.length === 0) {
            aggiungiProdotto(lista);
        }

        else {

            //chiedo all'utente se vuole andare avanti con il programma oppure no
            scelta = prompt('Si desidera proseguire?')

            if (scelta == 'si' || scelta == 'SI') {

                let scelta2 = "";

                //controllo che l'utente scriva correttamente cosa fare (aggiungi o elimina)
                //utilizzando un ciclo while
                while (scelta2 != 'aggiungi' && scelta2 != 'elimina') {

                    scelta2 = prompt('Vuoi eliminare o aggiungere un prodotto? N.B. la scelta può essere fatta scrivendo "aggiungi" o "elimina".')
                    //converto l'input dell'utente in minuscolo in modo che il programma rilevi correttamente il valore della variabile
                    //e possa eseguire il programma senza problemi
                    scelta2 = scelta2.toLowerCase();
                }

                //utilizzo lo switch per scegliere l'operazione da eseguire
                switch (scelta2) {

                    //se scelta2 è uguale a "aggiungi" la funzione ti riporta alla funzione aggiungiProdotto
                    //consentendoti di inserire un nuovo prodotto
                    case 'aggiungi':

                        aggiungiProdotto(lista)

                        break;

                    //se scelta2 è uguale a "elimina" la funzione ti riporta alla funzione eliminaProdotto
                    //consentendoti di eliminare un prodotto specifico
                    case 'elimina':

                        eliminaProdotto(lista, prodotto)

                        break;
                }

            }

            //nel caso l'utente decida di non continuare, viene controllato che abbia scritto bene "esci" o "no"
            else if (scelta.toLowerCase() === 'esci' || scelta.toLowerCase() === 'no') {
                break;
            }
        }
    }

    //con il ciclo for viene visualizzato l'elenco degli elementi
    visualizza = "LISTA DELLA SPESA:";
    for (let i = 0; i < lista.length; i++) {
        visualizza += ' - ' + lista[i];
    }

    alert(visualizza)
}

//Funzione che permette di aggiungere un elemento alla lista della spesa
function aggiungiProdotto(lista) {

    prodotto = prompt('Cosa vuoi aggiungere alla lista della spesa?')

    lista.push(prodotto)

    alert('Prodotto aggiunto correttamente!')
}

//Funzione che permette di eliminare un elemento dalla lista della spesa
function eliminaProdotto(lista, prodotto) {
    prodotto = prompt('Cosa vuoi eliminare?')

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == prodotto) {
            lista.splice(i, 1);
        }
    }
}