console.log("script loaded!");

let fileSelectBtn = document.getElementById("file-select");
let fileInput = document.getElementById("file-input");

fileSelectBtn.addEventListener("click", function click() {
  fileInput.click();
});

//Properties list section animations

function showProperties() {
  var showProperty = document.querySelectorAll(".show-properties-anime");

  for (var i = 0; i < showProperty.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = showProperty[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      showProperty[i].classList.add("active");
    } else {
      showProperty[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showProperties);

//Benefits section animations

function showBenefits() {
  var showBenefits = document.querySelectorAll(".benefits");

  for (var i = 0; i < showBenefits.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = showBenefits[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      showBenefits[i].classList.add("show");
    } else {
      showBenefits[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", showBenefits);

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
