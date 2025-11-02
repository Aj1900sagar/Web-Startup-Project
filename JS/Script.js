window.addEventListener("load", () => {

    // Background zoom animation
    const main = document.querySelector("main");
    main.classList.add("animate-bg");

    // Typing text animation
    const textElement = document.querySelector("main p");
    const text = textElement.textContent;
    textElement.textContent = "";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 40);
        }
    }
    typeEffect();

});




// ///////////////////////////////////////////////////////
// ✅ APPLY BUTTON CLICK MESSAGE
document.querySelectorAll(".job-card button").forEach(btn => {
  btn.addEventListener("click", function () {
    let job = this.parentElement.querySelector("h3").innerText;
    alert(`✅ Application sent for "${job}"`);
  });
});

// ✅ FADE-IN ANIMATION ON SCROLL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".job-card").forEach(card => {
    let cardTop = card.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 60) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";
    }
  });
});
