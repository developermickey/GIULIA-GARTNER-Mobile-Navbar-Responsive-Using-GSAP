let menu = document.getElementById("menuItem");

let menuBtn = document.querySelector(".mainMenu");
let closeBtn = document.querySelector(".closeMenu");
let menudiv = document.querySelector(".menudiv");



function menuOpen() {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";

    gsap.to(menudiv, {duration: 0.5,y: "0%",ease: "power2.inOut"})
}

function closeOpen() {
    menu.style.display = "block";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";

    gsap.to(menudiv, {duration: 0.5,y: "-130%",ease: "power2.inOut"})
}