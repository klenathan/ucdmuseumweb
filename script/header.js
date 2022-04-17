let header = `
    <nav>
        <ul class="navbar" id="navbar"> 
            <li><a href="../index.html">Museum abcxyz</a></li>
            <li><a href="../explore.html" class="nav-item">Explore</a></li>
            <li><a href="../artifacts.html" class="nav-item">Artifacts</a></li>
            <li><a href="#" class="nav-item">Search</a></li>
            <li><a class="menu-icon" onclick="openMenu()">Menu</a></li>
        </ul>    
    </nav>
    <nav id="responsive-menu">
        <a href="explore.html" >Explore</a>
        <a href="artifacts.html" >Artifacts</a>
        <a href="#" >Search</a>
    </nav>
`;
document.querySelector("#header").innerHTML = header;

// Responsive menu on mobile devices 
function openMenu() {
    let x = document.getElementById("responsive-menu");
    if (x.style.transform != 'translate(100vw, 0px)') {
        x.style.transform = 'translate(100vw, 0)'
    } else {
        x.style.transform = 'translate(0, 0vh)'
    }
}
    
