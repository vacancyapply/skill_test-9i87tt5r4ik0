//elements
const continueBtn = document.getElementById("continue");
const continueBox = document.getElementById("buttonBox");
const bodyContent = document.getElementById("bodyContent");
const error = document.getElementById("error");

continueBtn.addEventListener("click", function (){
    continueBox.style.display = "none";
    error.style.display = "block";
    bodyContent.style.display = "none";
})