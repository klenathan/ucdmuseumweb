let explore_page = document.getElementById('explore_page')

let chinese_list = ["Wuying_Pagoda", "Great_Wall", "Celestial_Muscian_Jiyue_tian"]
let korean_list = ["Buddha_statue_Unified_Silla", "Tombstone_of_King_Taejong_Muyeol_Gyeongju"]
let japan_list = ["Jizo_Ojizo_sama", "Statue_of_a_man_smoking", "Bishamonten"]

fetch("../artifact_data.json")
    .then(res => res.json())
    .then(data => {
        if (explore_page.innerHTML === "Chinese Artifacts") {
            renderCard (chinese_list, data)
        } else if (explore_page.innerHTML === "Korean Artifacts") {
            renderCard (korean_list, data)
        } else if (explore_page.innerHTML === "Japanese Artifacts") {
            renderCard (japan_list, data)
        } else {
            console.log("Error")
        }
        
    })



function renderCard (inputList, jsonData) {
    for (var i in inputList) {
        var artifact = document.createElement('a')
        artifact.setAttribute('href', "../artifact/"+inputList[i].toLowerCase()+".html");
        artifact.setAttribute('class', "img-info");
        // console.log(inputList[i])
        var image = document.createElement('img')
        image.src = "../assets/artifact/"+inputList[i]+".png"
        image.alt = jsonData[inputList[i]]["name"]
    
        var artifactName = document.createElement('p')
        artifactName.innerHTML = jsonData[inputList[i]]["name"]
    
        var artifactDate = document.createElement('p')
        artifactDate.innerHTML = jsonData[inputList[i]]["date"]
        artifactDate.setAttribute('class', "date");
    
        artifact.appendChild(image)
        artifact.appendChild(artifactName)
        artifact.appendChild(artifactDate)
    
        document.getElementById("artifact-list").appendChild(artifact);
    }
}


/* <a href="3dview1.html" class="img-info">
        <img
        src="assets/artifact/Sculpture “Bust of Róża Loewenfeld”.jpeg"
        alt=""
        />
        <p>Lorem ipsum</p> 
    </a>
*/