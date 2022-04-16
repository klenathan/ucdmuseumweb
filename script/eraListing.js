
let eraList = ["one", "two"];

for (let i = 0; i<4; i++) {
    var era = document.createElement('a')
    era.setAttribute('href', "3dview1.html");
    era.setAttribute('class', "img-info");

    var image = document.createElement('img')
    image.src = "assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
    image.alt = "just a demo picture"

    var eraName = document.createElement('p')
    eraName.innerHTML = 'Lorem ipsum'

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