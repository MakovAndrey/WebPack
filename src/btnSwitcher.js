export function addListenerShowEl(btn, firstEl, secondEl) {
    btn.addEventListener("click", () => {
        firstEl.style.display = "block";
        secondEl.style.display = "none";
    });
}