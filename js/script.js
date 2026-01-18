document.addEventListener("DOMContentLoaded", () => {
  const animatedBox = document.querySelector(".animated-box");

  if (animatedBox) {
    animatedBox.addEventListener("mouseenter", () => {
      animatedBox.style.animationPlayState = "paused";
    });

    animatedBox.addEventListener("mouseleave", () => {
      animatedBox.style.animationPlayState = "running";
    });
  }
});
