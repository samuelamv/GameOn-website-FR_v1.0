function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalform = document.querySelector(".modal-body");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const form = document.querySelector("form");

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
  const confirmationBlock = document.querySelector(".confirmationblock");
  const confirmationBtn = document.querySelector(".confirmation-button");
  confirmationBlock.remove();
  confirmationBtn.remove();
  form.style.display = "block";
  form.reset();
}

function isValidate(field, condition){
  return condition(field.value);
}

function showError(field, errorMessage){
  const formData = field.closest('.formData');
  formData.dataset.error = errorMessage;
  formData.dataset.errorVisible = true;
}

function hideError(field){
  const formData = field.closest('.formData');
  formData.dataset.error = "";
  formData.dataset.errorVisible = false;
}

// Quand on submit
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  const checkList = [
    {
      id: "first",
      condition: v => v.length > 2,
      errorMessage: "Le prénom doit contenir au minimum 2 caractères"
    },
    {
      id: "last",
      condition: v => v.length > 3,
      errorMessage: "Le nom doit contenir au minimum 3 caractères"
    },
    {
      id: "email",
      condition: v => /^[a-zA-Z._-]+@[a-z._-]+\.[a-z]/.test(v),
      errorMessage: "Veulliez saisir une adresse email valide"
    },
    {
      id: "birthdate",
      condition: v => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(v),
      errorMessage: "Veulliez saisir une date valide"
    },
    {
      id: "quantity",
      condition: v => parseInt(v) >= 0,
      errorMessage: "Veulliez saisir un nombre"
    },
    {
      id: "location1",
      condition: () => {
        const radioButtons = Array.from(document.querySelectorAll('input[type="radio"]'));
        return radioButtons.some(r => r.checked)
    },
      errorMessage: "Veuillez sélectionner une option."
    },
    {
      id: "checkbox1",
      condition: v => document.getElementById("checkbox1").checked,
      errorMessage: "Veuillez accepter les conditions d'utilisation"
    }
  ];

  let isValid = true;

  // Vérification de chaque élément dans checkList
  checkList.forEach(obj => {
    const element = document.getElementById(obj.id);
    if (!isValidate(element, obj.condition)) {
      showError(element, obj.errorMessage);
      isValid = false;
    } else {
      hideError(element);
    }
  });

  function closeBodyModal() {
    form.style.display = "none";
    // Créer une balise <p>
    var myText = document.createElement('p');
    myText.textContent = "Merci pour votre inscription";
    myText.classList.add("confirmationblock");
    // Ajouter des styles CSS pour centrer le texte
    myText.style.textAlign = "center";
    myText.style.padding = '360px 0';
    // Créer un bouton
    var myButton = document.createElement('button');
    myButton.textContent = "Fermer";
    myButton.classList.add('btn-submit', 'button', 'confirmation-button');
    myButton.addEventListener("click", closeModal);

    // Ajouter le paragraphe et le bouton à la div
    modalform.appendChild(myText);
    modalform.appendChild(myButton);
  }

  if (isValid) {
    //form.submit();
    closeBodyModal();
  };
});


