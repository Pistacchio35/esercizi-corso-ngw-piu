function aggiungiProdotto(lista) {

    let prodotto = "";
    let n = 0;
    visualizza = ""

    while (true) {

        prodotto = prompt('Cosa vuoi aggiungere alla lista della spesa?')

        lista.push(prodotto)

        n = n+1

        alert('Prodotto aggiunto correttamente!')

        prodotto = prompt('Si desidera proseguire?')
    
        if (prodotto == 'ESCI' || prodotto == 'esci' || prodotto == 'NO' || prodotto == 'no') break;
    }

    for(let i=0;i<n;i++)
    {
    visualizza = visualizza + ' - ' + lista[i]
    console.log(lista[i]);
    }
    alert('LISTA DELLA SPESA' + visualizza)
}