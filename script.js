
var button = document.getElementById("togglebutton");
var img1 = document.getElementById("paperrow1");
var img2 = document.getElementById("paperrow2");
var img3 = document.getElementById("paperrow3");
var img4 = document.getElementById("paperrow4");
var img5 = document.getElementById("paperrow5");
var img6 = document.getElementById("paperrow6");
var img7 = document.getElementById("paperrow7");
var img8 = document.getElementById("paperrow8");
var img9 = document.getElementById("paperrow9");

function changeImage(){
    img1.setAttribute.src= "assets/images/Papers-Electric1.png";
    img2.setAttribute.src= "assets/images/Papers-Hawaii2.png";
    img3.setAttribute.src= "assets/images/Papers-Corals2.png";
    img4.setAttribute.src= "assets/images/Papers-FBall2.png";
    img5.setAttribute.src= "assets/images/Papers-VNWar2.png";
    img6.setAttribute.src= "assets/images/Papers-SteelTown2.png";
    img7.setAttribute.src= "assets/images/Papers-ClassMyth1.2.png";
    img8.setAttribute.src= "assets/images/Papers-ClassMyth2.2.png";
    img9.setAttribute.src= "assets/images/Papers-ClassMyth3.2.png";
}

button.addEventListener("click", changeImage());

console.log(changeImage());