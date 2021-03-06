let newHeader = `
    <nav>
        <ul class="navbar" id="navbar">
            <li class="logo-container"> 
                <a href="../index.html" >
                <img class="nav-logo" src="../assets/logo.png" alt="Logo">
                </a>
            </li>
            <li class="nav-item"><a href="../explore.html" >Explore</a></li>
            <li class="nav-item"><a href="../artifact.html">Artifacts</a></li>

            <li id="search-container">
                
                <button id="search-btn" type="submit"><i
                class="icon-style fa-2x fa-solid fa-magnifying-glass" style="color: #c6b47b;"></i></button>
                <input id="search_artifact" type="text" placeholder="Search artifact...">
                <ul id="search-result"></ul>
            </li>

            <li><a class="menu-icon" onclick="openMenu()">Menu</a></li>
        </ul>
    </nav>
    <nav id="responsive-menu">
        <a href="../explore.html" >Explore</a>
        <a href="../artifact.html" >Artifacts</a>
    </nav>
`;

// onclick="searchItem()" 
document.querySelector("#new-header").innerHTML = newHeader;


// Submit search on pressing "Enter"

var input = document.getElementById("search_artifact");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    searchItem()
    if (event.keyCode === 13) {
        let userInput = document.getElementById('search_artifact').value;
        // console.log("Searched " + userInput)
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        // document.getElementById("search-btn").click();
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

function searchItem() {
    resultList = []
    document.getElementById("search-result").innerHTML = ''
    fetch("../artifact_data.json")
        .then(res => res.json())
        .then(data => {
            let userInput = document.getElementById('search_artifact').value.toLowerCase();
            Object.keys(data).forEach(function (key) {
                let target = key.toLowerCase().split("_")
                // console.log(target)
                Object.keys(target).forEach(function (k) {
                    if (target[k].includes(userInput)) {
                        let result = data[key]["name"]
                        resultList.push(result)
                        resultList = [...new Set(resultList)]
                        // window.location.href = "artifact/" + target.join("_") + ".html";
                    }
                })
            });

            
            // console.log(userInput === "")
            if (userInput === "" || userInput === " ") {
                resultList = []
            } else if (resultList == false) {
                resultList = ["Result not found"]
            }

            for (v in resultList) {
                // console.log(resultList[v])
                const resultElement = document.createElement('a');
                resultElement.href = "../artifact/" + resultList[v].toLowerCase().split(" ").join("_").replace(",", "").replace("(", "").replace(")", "").replace("-", "_") + ".html"
                const list = document.getElementById('search-result');
                const li = document.createElement('p');
                list.setAttribute('class', "search-result-element")
                li.innerHTML = resultList[v]
                resultElement.appendChild(li);
                list.appendChild(resultElement);

                if (resultList == "Result not found") {
                    resultElement.href = "#";
                }

                // console.log(resultElement)

                // document.getElementById("search-result").appendChild(resultElement)
            }

        })
}