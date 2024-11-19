const loginForm = document.getElementById('login-form');
const emailInput = loginForm.querySelector('input[placeholder="Email"]');
const passwordInput = loginForm.querySelector('input[placeholder="Password"]');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser) {
    alert('No user found. Please sign up first.');
    return;
  }

  // Validate credentials
  if (emailInput.value === storedUser.email && passwordInput.value === storedUser.password) {
    alert('Login successful!');
    loginForm.reset();
    window.location.href = 'homepage.html'; // Redirect to homepage
  } else {
    alert('Invalid email or password.');
  }
});