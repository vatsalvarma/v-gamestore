document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".game-card").forEach(card => {
        if (card.innerText.toLowerCase().includes(value)) {
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
            card.style.display = "block";
        } else {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
            card.style.display = "none";
        }
    });
});

