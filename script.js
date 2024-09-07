function validateForm() {
  let isValid = true;

  // Full Name Validation
  const name = document.getElementById("fullName").value;
  if (name.length < 5) {
    document.getElementById("nameError").innerText =
      "Name must be at least 5 characters long.";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email Validation
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Phone Number Validation
  const phone = document.getElementById("phone").value;
  if (phone.length !== 10 || phone === "1234567890") {
    document.getElementById("phoneError").innerText =
      "Enter a valid 10-digit phone number.";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  // Password Validation
  const password = document.getElementById("password").value;
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password === name
  ) {
    document.getElementById("passwordError").innerText =
      "Password is not strong.";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // Confirm Password Validation
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match.";
    isValid = false;
  } else {
    document.getElementById("confirmPasswordError").innerText = "";
  }

  return isValid;
}
