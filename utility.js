//Funzione che va ad aggiungere dei prodotti ad una lista della spesa
//fino a quando l'utente non decide di interrompere il programma
function aggiungiProdotto(lista) {

    let prodotto = "";
    visualizza = ""

    while (true) {

        //richiede in input l'inserimento da parte dell'utente di un prodotto
        prodotto = prompt('Cosa vuoi aggiungere alla lista della spesa?')

        //inserimento nella lista del prodotto
        lista.push(prodotto)

        alert('Prodotto aggiunto correttamente!')

        prodotto = prompt('Si desidera proseguire?')
        
        if (scelta.toLowerCase() === 'esci' || scelta.toLowerCase() === 'no') break;
    }

    //visualizzazione di tutti gli elementi della lista
    visualizza = "LISTA DELLA SPESA:";
    for (let i = 0; i < lista.length; i++) {
        visualizza += ' - ' + lista[i];
    }

    alert(visualizza)
}