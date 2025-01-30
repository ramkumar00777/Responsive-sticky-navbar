window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  document.getElementById("navbar").style.background = "#fff";
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

console.log("Implementing changes in script.js")
console.log("Implementing changes in script.js");

// commmit in feature/dnd file

console.log("Implementing changes in feature/dnd file");

// implemented stash successsfully
console.log("Some changes has been learned from stash");
