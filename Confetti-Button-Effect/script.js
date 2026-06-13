const button = document.getElementById("celebrateBtn");

button.addEventListener("click", () => {

    confetti({
    particleCount: 200,
    spread: 120,
    startVelocity: 40,
    gravity: 0.8,
    scalar: 1.2
});

    for(let i = 0; i < 30; i++){

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        // Random color
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.transform =
        `rotate(${Math.random()*360}deg)`;

        // Button position
        const rect = button.getBoundingClientRect();

        confetti.style.left =
            rect.left + rect.width / 2 + "px";

        confetti.style.top =
            rect.top + rect.height / 2 + "px";

        // Random direction
        confetti.style.setProperty(
            "--x",
            `${Math.random() * 300 - 150}px`
        );

        confetti.style.setProperty(
            "--y",
            `${Math.random() * 300 - 150}px`
        );

        document.body.appendChild(confetti);

        // Remove particle after animation
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }

});
