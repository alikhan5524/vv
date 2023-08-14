



document.getElementById("promo").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    document.getElementById("spase").classList.add("cover-block");
    document.getElementById("pop-up").classList.add("window-position");
});

document.getElementById("spase").addEventListener("click", () => {
    document.body.style.overflow = "visible";
    document.getElementById("spase").classList.remove("cover-block");
    document.getElementById("pop-up").classList.remove("window-position");
});