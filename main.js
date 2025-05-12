function flipCard() {
  document.getElementById("cvFlip").classList.toggle("flipped");
}
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".progress-fill").forEach((bar) => {
      const value = bar.getAttribute("data-value");
      bar.style.width = value + "%";
    });
  }, 1500);
});
