const signupForm = document.getElementById('signup-form');
const fullNameInput = signupForm.querySelector('input[placeholder="Full Name"]');
const emailInput = signupForm.querySelector('input[placeholder="Email"]');
const passwordInput = signupForm.querySelector('input[placeholder="Password"]');
const confirmPasswordInput = signupForm.querySelector('input[placeholder="Confirm Password"]');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validation
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match!');
    return;
  }

  // Store data in localStorage
  const user = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert('Signup successful! Redirecting to login.');
  signupForm.reset();
  window.location.href = 'login.html'; // Redirect to login
});
