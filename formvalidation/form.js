// Select form and inputs
let form = document.getElementById("userForm");
let nameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let successMsg = document.getElementById("success");

// Add submit event
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form reload
    let isValid = true;

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    successMsg.textContent = "";

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required!";
        isValid = false;
    }

    // Validate Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required!";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email!";
        isValid = false;
    }

    // Validate Password  
    if (passInput.value.trim() === "") {
        passError.textContent = "Password is required!";
        isValid = false;
    } else if (passInput.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters!";
        isValid = false;
    }

    // Success Message
    if (isValid) {
        successMsg.textContent = "Form submitted successfully!";
        successMsg.style.color = "green";
        form.reset();
    }
});


console.log(nameInput.value);
console.log(emailInput.value);
console.log(passInput.value);