window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header_txt").style.fontSize = "30px";
    document.getElementById("header").style.padding = "0px";
    document.getElementById("header").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("header_txt").style.left = "300px";

    document.getElementById("menu").style.display = "flex"
  } else {
    document.getElementById("header_txt").style.left = "50%";
    document.getElementById("header_txt").style.fontSize = "80px";
    document.getElementById("header").style.paddingTop = "20vh";
    document.getElementById("header").style.backgroundColor = "transparent";

    document.getElementById("menu").style.display = "none"
  }
}

// function scrolltodiv(div) {
//   var elmnt = document.getElementById(div);
//   elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' }, false);
// }


// function scrolltotop() {
//   window.scrollTo({top: 0, behavior: 'smooth'});
// }