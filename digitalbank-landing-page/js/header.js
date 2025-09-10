const menuBtn = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const navBox = document.getElementById("nav-box");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuIcon.classList.toggle("header__menu-icon--cross");
    document.getElementsByTagName("main")[0].classList.toggle("overlay");
    navBox.style.display = navBox.style.display == "block" ? "none" : "block";
})