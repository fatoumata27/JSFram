const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    console.log(e);
    alert("hello");
    e.preventDefault();
})