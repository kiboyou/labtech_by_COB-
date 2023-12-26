const register = document.querySelector(".register > button");
const patienting = document.querySelector(".patienting");
const cancelpatienting = document.querySelector(".patienting-cancel");
const lost = document.querySelectorAll(".lost");
const deletepatient = document.querySelector(".delete");
const cancelDelete = document.querySelector(".delete-cancel");

const delPatient = document.querySelectorAll(".del");
const warning = document.querySelector(".delete");
const cancelDel = document.querySelector(".delete-cancel");

// ENREGISTRER UN NOUVEAU PATIENT
register.addEventListener("click", () => {
  patienting.style.display = "block";
});

cancelpatienting.addEventListener("click", () => {
  patienting.style.display = "none";
});

//

lost.forEach((el) =>
  el.addEventListener("click", () => {
    console.log(el);
    deletepatient.style.display = "block";
  })
);

cancelDelete.addEventListener("click", () => {
  deletepatient.style.display = "none";
});


// SUPPRESSION D'UN PATIENT
delPatient.forEach((el) =>
  el.addEventListener("click", () => {
    warning.style.display = "block";
  })
);

cancelDel.addEventListener("click", () => {
  warning.style.display = "none";
});


