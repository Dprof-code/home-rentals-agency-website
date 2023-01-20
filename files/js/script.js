console.log("script loaded!");

let fileSelectBtn = document.getElementById("file-select");
let fileInput = document.getElementById("file-input");

fileSelectBtn.addEventListener("click", function click() {
  fileInput.click();
});
