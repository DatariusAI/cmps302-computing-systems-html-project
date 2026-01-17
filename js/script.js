// =========================
// BASIC INTERACTIVITY SCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const heroLink = document.querySelector(".hero-link");
  const cards = document.querySelectorAll(".card");

  // Safety check
  if (heroLink) {
    heroLink.addEventListener("click", () => {
      console.log("AUB logo clicked – opening official website.");
    });

    heroLink.addEventListener("mouseenter", () => {
      heroLink.title = "Click to visit the American University of Beirut website";
    });
  }

  // Card hover logging (demonstrates JS usage)
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.cursor = "pointer";
    });
  });
});
