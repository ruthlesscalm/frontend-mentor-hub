const menuBtn = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", ()=>{
    menuIcon.classList.toggle("header__menu-icon--cross");
})