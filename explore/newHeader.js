let newHeader = `
    <nav>
        <ul class="navbar" id="navbar"> 
            <li>
            <a href="../index.html" >
            <img class="nav-logo" src="../assets/logo.png" alt="Logo">
            </a>
            </li>
            <li><a href="../explore.html" class="nav-item">Explore</a></li>
            <li><a href="../artifact.html" class="nav-item">Artifacts</a></li>
            <li id="search-container">
                <input id="search_artifact" type="search" placeholder="Search artifact...">
                <button onclick="searchItem()" id="search-btn" type="submit"><i
                class="icon-style fa-2x fa-solid fa-magnifying-glass" style="color: #c6b47b;"></i></button>
            </li>
            
            <li><a class="menu-icon" onclick="openMenu()">Menu</a></li>
        </ul>    
    </nav>
    <nav id="responsive-menu">
        <a href="explore.html" >Explore</a>
        <a href="artifacts.html" >Artifacts</a>
        <a href="#" >Search</a>
    </nav>
`;
document.querySelector("#new-header").innerHTML = newHeader;

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
    fetch("../artifact_data.json")
        .then(res => res.json())
        .then(data => {
            Object.keys(data).forEach(function (key) {
                let userInput = document.getElementById('search_artifact').value;
                console.log(userInput)
                let target = key.toLowerCase().split("_")

                // console.log(target)
                Object.keys(target).forEach(function (k) {
                    if (target[k].includes(userInput)) {
                        window.location.href = target.join("_") + ".html";
                    }
                    else {
                        console.log("nooo")
                    }
                })
            });
        }


        )
}
