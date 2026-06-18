console.log("JS Connected");

const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});