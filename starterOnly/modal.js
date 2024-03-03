function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

let unPrenom = document.getElementById("first");
console.log(unPrenom);
let unNom = document.getElementById("last");
console.log(unNom);
let unEmail = document.getElementById("email");
console.log(unEmail);
let uneDateAnniversaire = document.getElementById("birthdate");
console.log(uneDateAnniversaire);
let nombreTournois = document.getElementById("quantity");
console.log(nombreTournois);
let lieuTournois = document.querySelectorAll(".formDate input");
console.log(lieuTournois);
let conditionUtilisation = document.getElementById("checkbox1");
console.log(conditionUtilisation);
let notifEvenements = document.getElementById("checkbox2");
console.log(notifEvenements);
let validationBtn = document.querySelector(".btn-submit");
console.log(validationBtn);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



