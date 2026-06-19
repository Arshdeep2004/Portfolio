const popup = document.getElementById("welcomePopup");
const okBtn = document.getElementById("okBtn");

okBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

okBtn.addEventListener("click", () => {
    popup.style.opacity = "0";

    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
});