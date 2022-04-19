fetch("artifact_data.json")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        for (var key in data){
            
            // console.log(artifact_key)
            target_href = "artifact/" + key.toLowerCase() + ".html"
            var artifact = document.createElement('a')
            artifact.setAttribute('href', target_href);
            artifact.setAttribute('class', "img-info");
        
            var image = document.createElement('img')
            image.src = "assets/artifact/"+key+".png"
            
            image.alt = data[key]["name"]
        
            var artifactName = document.createElement('p')
            artifactName.innerHTML = data[key]["name"]
        
            var artifactDate = document.createElement('p')
            artifactDate.innerHTML = data[key]["date"]
            artifactDate.setAttribute('class', "date");
        
            artifact.appendChild(image)
            artifact.appendChild(artifactName)
            artifact.appendChild(artifactDate)
        
            document.getElementById("artifact-list").appendChild(artifact);
        
        }
    })

/* <a href="3dview1.html" class="img-info">
        <img
        src="assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
        alt=""
        />
        <p>Lorem ipsum</p> 
    </a>
*/