/*
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const send_button = document.getElementById('send_button');
const form = document.getElementById('registerForm');
let fieldOK = true;
console.log('je suis là');
form.addEventListener('submit', (e) => {
    console.log(e);
    alert('hello');
    if (firstname.validity.valueMissing) {
        alert('bou');
        //preventDefault <=> Arret du comportement normal du HTML
        e.preventDefault();
        missfirstname.textContent = 'Nom manquant';
        missfirstname.style.color = 'red';
        fieldOK = false;
    }
})*/

const firstname = document.getElementById('firstname');
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    if (!firstname.validity.valid) {
        e.preventDefault();
        missfirstname.textContent = 'Nom manquant';
        missfirstname.style.color = 'red';
    }
});
