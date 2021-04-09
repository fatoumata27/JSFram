var firstname = document.getElementById('firstname');

var lastName = document.getElementById('lastname');

var email = document.getElementById('email');

var password = document.getElementById('pwd');

function checkFirstName (event) {
     var elt = event.target;
    if(elt.value === "") {
        elt.style.borderColor = "red";
    }   
}

function checkLastName (event) {
     var elt = event.target;
    if(elt.value === "") {
        elt.style.borderColor = "red";
    }    
}

function checkPassword (event) {
     var elt = event.target;
    if(elt.value === "") {
        elt.style.borderColor = "red";

    }    
}

function checkEmail (event) {
    var elt = event.target;
    if(elt.value === "") {
        elt.style.borderColor = "red";
    }   

    if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        return true;
    } else {
        alert("Votre adresse email est invalide!");
        return (false);
    }
}

firstname.required = checkFirstName;
firstname.onblur = checkFirstName;

lastName.required = checkLastName;
lastName.onblur = checkLastName;

email.required = checkEmail;
email.onblur = checkEmail;

password.onblur = checkPassword;
password.required = checkPassword;