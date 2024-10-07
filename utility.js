function cerca() {

    document.getElementById('scritta_benvenuto').innerHTML = ""
    document.getElementById('elenco_credenziali').innerHTML = ""

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

}