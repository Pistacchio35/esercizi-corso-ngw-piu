function pulisciPagina() {
    location.reload();
}

//funzione che cambia l'immagine del "mostra nascondi password"
function changeImage(n, img) {
    //riceve come parametri l'id dell'immagine
    //e il numero 1 o 2 in base all'immagine

    if (n == 1) {
        img.src = 'img/show.png'
        show_password()
    }
    else {
        img.src = 'img/hide.png'
        show_password()
    }
}

//funzione che cambia il tipo di campo input
//convertendolo in password o testo, per renderlo visibile
function show_password() {

    let psw = document.getElementById("password");

    if (psw.type === "password") {
        psw.type = "text";
    }
    else {
        psw.type = "password";
    }
}

//funzione che aggiunge la scritta "BENVENUTO UTENTE"
//quando vengono inserite le credenziali
function addScritta() {

    //let insert_scritta = document.createElement("h1");
    let insert_scritta = ""
    insert_scritta.innerText = "BENVENUTO UTENTE";

    document.getElementById('scritta_benvenuto').appendChild(scritta);
}

//funzione che mostra le credenziali una volta inserite
function mostra_credenziali(nome, cognome, email, password) {

    console.log('NOME: ' + nome)
    console.log('COGNOME: ' + cognome)
    console.log('EMAIL: ' + email)
    console.log('PASSWORD: ' + password)

    let insert_scritta = document.createElement("h1");
    insert_scritta.innerText = "BENVENUTO UTENTE";
    document.getElementById('scritta_benvenuto').appendChild(insert_scritta);

    let credenziali = [nome, cognome, email, password]

    let list = document.getElementById("elenco_credenziali");

    credenziali.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });

    document.getElementById("benvenuto").scrollIntoView({
        // Aggiunge uno scroll fluido
        behavior: 'smooth',
        // Allinea l'inizio del div con la parte superiore della viewport
        block: 'start'
    });
}