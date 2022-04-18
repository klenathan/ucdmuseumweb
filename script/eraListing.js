
let eraList = ["China", "two", "three", "four"];

for (let i = 0; i<eraList.length; i++) {
    var era = document.createElement('a')
    let target = eraList[i].toLowerCase()  + ".html"
    era.setAttribute('href', target);
    era.setAttribute('class', "img-info");
    era.alt = "Redirect"

    var image = document.createElement('img')
    image.src = "assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
    image.alt = "just a demo picture"

    var eraName = document.createElement('p')
    eraName.innerHTML = eraList[i]

    era.appendChild(image)
    era.appendChild(eraName)

    document.getElementById("era-list").appendChild(era);
}

/* <a href="3dview1.html" class="img-info">
        <img
        src="assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
        alt=""
        />
        <p>Lorem ipsum</p> 
    </a>
*/