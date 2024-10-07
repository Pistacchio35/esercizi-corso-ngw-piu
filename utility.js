function mostra(nome,paese,tempo,temp,text,icon){

    document.getElementById('elenco-meteo').innerHTML = ""

    let meteoCitta = [nome, paese, tempo, temp, text]

    let list = document.getElementById("elenco-meteo");

    meteoCitta.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });

    let div = document.getElementById('mostra-meteo')
    let image = document.createElement('img')
    image.src = 'https:'+icon
    div.appendChild(image)
}