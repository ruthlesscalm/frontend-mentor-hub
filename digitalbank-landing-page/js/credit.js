const infoBtn = document.getElementById("info__btn");
const infoWrapper = document.getElementById("info__wrapper");
const attributions = document.getElementById("attributions");

infoBtn.addEventListener("click", () => {
    attributions.classList.add("attributions-toggle");
    if(attributions.classList.contains("attributions-toggle")){
        infoWrapper.style.display = "none";
        setTimeout(() => {
            attributions.classList.remove("attributions-toggle");
        }, 3000);
        setTimeout(() => {
            infoWrapper.style.display = "flex";
        }, 5000);
    }
})