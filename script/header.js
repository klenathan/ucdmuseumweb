let header = `
    <nav>
        <ul class="navbar" id="navbar">
            <li>
            <a href="index.html" >
            <img class="nav-logo" src="assets/logo.png" alt="Logo">
            </a>
            </li>
            <li><a href="explore.html" class="nav-item">Explore</a></li>
            <li><a href="artifact.html" class="nav-item">Artifacts</a></li>

            <li id="search-container">
                <input id="search_artifact" type="text" placeholder="Search artifact...">
                <button onclick="searchItem()" id="search-btn" type="submit"><i
                class="icon-style fa-2x fa-solid fa-magnifying-glass" style="color: #c6b47b;"></i></button>
                <ul id="seach-result"></ul>
            </li>

            <li><a class="menu-icon" onclick="openMenu()">Menu</a></li>
        </ul>
    </nav>
    <nav id="responsive-menu">
        <a href="explore.html" >Explore</a>
        <a href="artifact.html" >Artifacts</a>
        <a href="#" >Search</a>
    </nav>
`;
document.querySelector("#header").innerHTML = header;


// Submit search on pressing "Enter"

var input = document.getElementById("search_artifact");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    let userInput = document.getElementById('search_artifact').value;
    console.log("Searched " + userInput)
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-btn").click();
  }
});

// Responsive menu on mobile devices
function openMenu() {
    let x = document.getElementById("responsive-menu");
    if (x.style.transform != 'translate(100vw, 0px)') {
        x.style.transform = 'translate(100vw, 0)'
    } else {
        x.style.transform = 'translate(0, 0vh)'
    }
}

resultList =[]

function searchItem() {
    fetch("artifact_data.json")
        .then(res => res.json())
        .then(data => {
            queryResult = "<ul></ul>"
            Object.keys(data).forEach(function (key) {
                let userInput = document.getElementById('search_artifact').value;
                // console.log("Searched " + userInput)
                let target = key.toLowerCase().split("_")
                // console.log(target)
                Object.keys(target).forEach(function (k) {
                    if (target[k].includes(userInput)) {
                        let result = target[k]["name"]
                        console.log(target[k]["name"])
                        resultList.push(result)
                        resultList = [...new Set(resultList)]
                        // console.log(resultList)
                        for(v in resultList) {
                            var eraName = document.createElement('p')
                            eraName.innerHTML = resultList[v]
                            document.getElementById("seach-result").appendChild(eraName)
                        }
                        // window.location.href = "artifact/" + target.join("_") + ".html";
                    }
                    else {
                        // console.log("cannot find")
                    }
                })
            });
        })
}