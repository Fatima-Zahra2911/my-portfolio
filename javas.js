document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".pages");

  hamburgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("navbar-active"); // Toggle the active class on click
  });
});
const typingText = document.querySelectorAll(".typing");

typingText.forEach((text, index) => {
  const textArray = text.textContent.split("");
  text.textContent = "";
  let currentIndex = 0;

  function typing() {
    if (currentIndex < textArray.length) {
      text.textContent += textArray[currentIndex];
      currentIndex++;
      setTimeout(typing, 50);
    }
  }
  setTimeout(() => {
    typing();
  }, index * 2000);
});
// Project Section
const projectBoxes = document.querySelectorAll(".box");

projectBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    const overlay = box.querySelector(".project-overlay");
    overlay.style.opacity = "1";
  });

  box.addEventListener("mouseout", () => {
    const overlay = box.querySelector(".project-overlay");
    overlay.style.opacity = "0";
  });
});
document.getElementById("linkedin").addEventListener("click", function () {
  alert("You are being redirected to LinkedIn!");
});

document.getElementById("gmail").addEventListener("click", function () {
  alert("Opening Gmail...");
});

document.getElementById("github").addEventListener("click", function () {
  alert("You are being redirected to GitHub!");
});
