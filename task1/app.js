const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    document.getElementById("learnMore").classList.toggle("open");
    btn.remove();
})