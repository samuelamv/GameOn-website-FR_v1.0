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
}

/*//fonction, vérification de la taille du prénom
function validerPrenom(){
  let prenom = document.getElementById("first");
  var usePrenom = prenom.value;
  if(usePrenom.length < 2) {
    const formData = prenom.closest('.formData');
    formData.dataset.error = "Le prénom doit contenir au minimum 2 caractères";
    formData.dataset.errorVisible = true;
    return false;
  } return true
}

//fonction, vérification de la taille du prénom
function validerNom(){
  let name = document.getElementById("last");
  var useName = name.value;
  if(useName.length < 3) {
    const formData = name.closest('.formData');
    formData.dataset.error = "Le nom doit contenir au minimum 3 caractères";
    formData.dataset.errorVisible = true;
    return false;
  }return true
}*/

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


//fonction, vérification de le format du mail
function valideEmail(){
  let email = document.getElementById("email");
  var useEmail = new RegExp("[a-zA-Z._-]+@[a-z._-]+\.[a-z]");
  if(!useEmail.test(email.value)) {
    const formData = email.closest('.formData');
    formData.dataset.error = "Le format de mail est incorrect";
    formData.dataset.errorVisible = true;
    return false;
  }return true
}

//fonction, vérification de l'input date
function valideDate(){
  let date = document.getElementById("birthdate");
  var useDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if(!useDate.test(date.value)) {
    const formData = date.closest('.formData');
    formData.dataset.error = "Le format de date est incorrect";
    formData.dataset.errorVisible = true;
    return false;
  }return true
}

//fonction, vérification du nombre de tournois
function validerNbTournois(){
  let nbTournois =  document.getElementById("quantity");
  var useNbTournois = nbTournois.value;
  if(!useNbTournois > 0){
    const formData = nbTournois.closest('.formData');
    formData.dataset.error = "Le nombre de particpation est incorect";
    formData.dataset.errorVisible = true;
    return false;
  }return true
}


//fonction, vérification particpation
function validerParticpation(){
  let btnRadio = document.querySelectorAll('input[type="radio"]');
  let LastBtnRadio = document.getElementById("location1");
  let oneResponse = false;

  for (let i = 0; i < btnRadio.length; i++) {
    if (btnRadio[i].checked){
      oneResponse = true;
      break;
    }
  }
  
  if (!oneResponse) {
    const formData = LastBtnRadio.closest('.formData');
    formData.dataset.error = "Faite un choix de participation";
    formData.dataset.errorVisible = true;
    return false;
  }return true
}

//fonction, vérification condition dutilisation
function validerConditionUtil(){
  let checkbox = document.getElementById("checkbox1");
  var useCheckbox = checkbox.checked;
    if (!useCheckbox === true) {
      const formData = checkbox.closest('.formData');
      formData.dataset.error = "Vous devez accpeté les conditions d'utilisations";
      formData.dataset.errorVisible = true;
      return false;
    }return true
}

function removeError(){
  // Sélectionne tous les éléments ayant les attributs 'data-error' ou 'data-errorVisible'
const elementsWithDataError = document.querySelectorAll('[data-error], [data-error-visible]');

// Parcourt chaque élément et supprime les attributs spécifiés
elementsWithDataError.forEach(element => {
    element.removeAttribute('data-error');
    element.removeAttribute('data-error-visible');
})
}

// Quand on submit
/*form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  removeError();

  // Variables pour suivre l'état de chaque validation
  let prenomValide = validerPrenom();
  let nomValide = validerNom();
  let emailValide = valideEmail();
  let dateValide = valideDate();
  let nbTournoisValid = validerNbTournois();
  let participationValide = validerParticpation();
  let conditionUtilValide = validerConditionUtil();

  // Vérification si toutes les validations sont réussies
  if (prenomValide && nomValide && emailValide && dateValide && nbTournoisValid && participationValide && conditionUtilValide) {
    // Toutes les validations sont réussies, soumission du formulaire
    form.submit();
  }
});*/


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
      condition: v => v > 0,
      errorMessage: "Veulliez saisir un nombre"
    },
    {
      id: "location1",
      condition: () => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return true; // Au moins un bouton radio est sélectionné
            }
        }
        return false; // Aucun bouton radio n'est sélectionné
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

  /*checkList.forEach(obj => {
    const element = document.getElementById(obj.id);
    isValidate(element, obj.condition) ? hideError(element) && isValid === true : showError(element, obj.errorMessage) && isValid === false;
  });*/
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

  if (isValid) {
    form.submit(); // Envoyer le formulaire
  };
});


