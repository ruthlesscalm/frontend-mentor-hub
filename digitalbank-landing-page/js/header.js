const menuBtn = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const navBox = document.getElementById("nav-box");

menuBtn.addEventListener("click", () => {
    menuIcon.classList.toggle("header__menu-icon--cross");
    navBox.style.display = navBox.style.display == "block" ? "none" : "block";
})