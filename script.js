const toggleButton = document.querySelector(".about-button");
const content = document.querySelector(".about-content");

toggleButton.addEventListener("click", () => {
  content.classList.toggle("open");

  if (content.classList.contains("open")) {
    toggleButton.textContent = "More about me ▾";
  } else {
    toggleButton.textContent = "More about me ▸";
  }
});
