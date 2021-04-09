const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('pwd');
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    if (!firstname.validity.valid) {
        e.preventDefault();
        missfirstname.textContent = 'Nom manquant';
        missfirstname.style.color = 'red';
    }
    if (!lastname.validity.valid) {
        e.preventDefault();
        misslastname.textContent = 'Prénom manquant';
        misslastname.style.color = 'red';
    }
    if (!email.validity.valid) {
        e.preventDefault();
        missemail.textContent = 'E-mail manquant';
        missemail.style.color = 'red';
    }
    if (!password.validity.valid) {
        e.preventDefault();
        misspassword.textContent = 'Mot de passe manquant';
        misspassword.style.color = 'red';
    }
});
