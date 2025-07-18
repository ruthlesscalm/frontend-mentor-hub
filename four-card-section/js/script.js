const mode = document.getElementById("mode");
const source = {
    day : "assets/images/day.svg",
    night : "assets/images/night.svg"
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        mode.setAttribute("src", source.night);
    }
});

if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
        mode.setAttribute("src", source.night);
    }
}

function modeChanger(){
    let srcAttribute = mode.getAttribute("src");
    if(srcAttribute == source.day){
        mode.setAttribute("src" , source.night);
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", "dark");
    }else{
        mode.setAttribute("src" , source.day);
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", "light");
    }
}

mode.addEventListener("click" , modeChanger);