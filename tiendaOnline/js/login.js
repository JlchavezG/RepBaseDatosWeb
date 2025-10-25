// script.js
document.addEventListener('DOMContentLoaded', () => {
  const loginPanel = document.getElementById('loginPanel');
  const registerPanel = document.getElementById('registerPanel');
  const goToRegister = document.getElementById('goToRegister');
  const goToLogin = document.getElementById('goToLogin');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // Cambiar a Registro
  goToRegister.addEventListener('click', () => {
    loginPanel.classList.remove('active');
    setTimeout(() => {
      registerPanel.classList.add('active');
    }, 300);
  });

  // Cambiar a Login
  goToLogin.addEventListener('click', () => {
    registerPanel.classList.remove('active');
    setTimeout(() => {
      loginPanel.classList.add('active');
    }, 300);
  });

  // Manejo de formularios (ejemplo básico)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email && password) {
    
      // Aquí integrarías tu lógica real (fetch, Firebase, etc.)
    }
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirmPassword').value;

    if (password !== confirm) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    if (email && password) {
      
      // Lógica de registro real aquí
    }
  });
});