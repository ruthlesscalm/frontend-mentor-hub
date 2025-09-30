const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeCircle = document.getElementById("theme-circle");

const logo = document.getElementById("logo");

const menuLine1 = document.getElementById("menu-line1");
const menuLine2 = document.getElementById("menu-line2");
const menuLine3 = document.getElementById("menu-line3");

const main = document.getElementById("main-content");

const infoImage = document.getElementById("info-image");

const themeIconsSrc = {
    light: "./assets/images/sun.svg",
    dark: "./assets/images/moon.svg",
};
const logoSrc = {
    lightLogo: "./assets/images/logo-light.svg",
    darkLogo: "./assets/images/logo-dark.svg",
}
const infoSrc = {
    lightLogo: "./assets/images/info-light.svg",
    darkLogo: "./assets/images/info-dark.svg",
}

const darkMode = () => {
    document.body.dataset.theme = "dark";
    document.body.classList.add("header__dark-mode");
    document.body.classList.add("hero__dark-mode");
    document.body.classList.add("features__dark-mode");
    document.body.classList.add("articles__dark-mode");
    document.body.classList.add("credits__dark-mode");
    main.classList.add("main__dark-mode");

    themeIcon.setAttribute("src", themeIconsSrc.dark);
    themeCircle.classList.add("header__theme-circle-dark");

    logo.setAttribute("src", logoSrc.lightLogo);
    infoImage.setAttribute("src", infoSrc.lightLogo);

    menuLine1.style.stroke = "#ffffff";
    menuLine2.style.stroke = "#bebebeff";
    menuLine3.style.stroke = "#ffffff";
}

const lightMode = () => {
    document.body.dataset.theme = "light";
    document.body.classList.remove("header__dark-mode");
    document.body.classList.remove("hero__dark-mode");
    document.body.classList.remove("features__dark-mode");
    document.body.classList.remove("articles__dark-mode");
    document.body.classList.remove("credits__dark-mode");
    main.classList.remove("main__dark-mode");

    themeIcon.setAttribute("src", themeIconsSrc.light);
    themeCircle.classList.remove("header__theme-circle-dark");

    logo.setAttribute("src", logoSrc.darkLogo);
    infoImage.setAttribute("src", infoSrc.darkLogo);

    menuLine1.style.stroke = "#000000";
    menuLine2.style.stroke = "#6b6f8f";
    menuLine3.style.stroke = "#000000";
}

window.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark") {
        darkMode();
    }
})

if(!localStorage.getItem("theme")){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        darkMode();
    }
}

themeBtn.addEventListener("click", () => {
    if (document.body.dataset.theme == "light") {
        darkMode();
        localStorage.setItem("theme", "dark");
        console.log(localStorage.getItem("theme"));
    } else if (document.body.dataset.theme == "dark") {
        lightMode();
        localStorage.setItem("theme", "light");
        console.log(localStorage.getItem("theme"));
    }
});