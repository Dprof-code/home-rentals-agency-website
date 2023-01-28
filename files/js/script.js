console.log("script loaded!");

let fileSelectBtn = document.getElementById("file-select");
let fileInput = document.getElementById("file-input");

fileSelectBtn.addEventListener("click", function click() {
  fileInput.click();
});

// Navigation
let nav = document.getElementById("nav");
let menuIconWrap = document.getElementById("nav-icon-container");

menuIconWrap.addEventListener("click", function (e) {
  if (e.target.id === "menu-icon") {
    nav.classList.toggle("open-nav");
    if (nav.classList.contains("open-nav")) {
      menuIconWrap.innerHTML = '<i id="menu-icon" class="fas fa-times"></i>';
    } else {
      menuIconWrap.innerHTML = '<i id="menu-icon" class="fas fa-bars"></i>';
    }
  }
});
