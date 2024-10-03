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
        
        if (prodotto == 'ESCI' || prodotto == 'esci' || prodotto == 'NO' || prodotto == 'no') break;
    }

    //visualizzazione di tutti gli elementi della lista
    for(let i=0;i<lista.length;i++)
    {
    visualizza = visualizza + ' - ' + lista[i]
    console.log(lista[i]);
    }
    alert('LISTA DELLA SPESA' + visualizza)
}