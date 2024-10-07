function mostra(meal,yt,descr) {

    let vuota = document.getElementById('video').src
    vuota.src = ""
    frame.appendChild(vuota)

    document.getElementById('elenco-piatti').innerHTML = ""
    
    let piatto = [meal, descr]

    let list = document.getElementById("elenco-piatti");

    piatto.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });

    let video = document.getElementById('video')
    video.src = yt
    frame.appendChild(video)

}