

for (let i = 0; i<48; i++) {
    var artifact = document.createElement('a')
    artifact.setAttribute('href', "artifact/3dview.html");
    artifact.setAttribute('class', "img-info");

    var image = document.createElement('img')
    if (i % 4 === 0) {
        image.src = "assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
    } else {
        image.src = "assets/test.jpg"
    }
    
    image.alt = "just a demo picture"

    var artifactName = document.createElement('p')
    artifactName.innerHTML = 'Lorem ipsum'

    var artifactDate = document.createElement('p')
    artifactDate.innerHTML = '2022'
    artifactDate.setAttribute('class', "date");

    artifact.appendChild(image)
    artifact.appendChild(artifactName)
    artifact.appendChild(artifactDate)

    document.getElementById("artifact-list").appendChild(artifact);
}


/* <a href="3dview1.html" class="img-info">
        <img
        src="assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
        alt=""
        />
        <p>Lorem ipsum</p> 
    </a>
*/