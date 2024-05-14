const loginForm = document.querySelector('form');
const adminLink = document.querySelector('.admin-link');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // ver se ta certo
  if (email === 'admin@poggerdex.com' && password === 'password123') {
    // login certo
    window.location.href = 'poggerdex.html?admin'; // Redirect with admin flag
  } else {
    // algo de errado
    alert('senha errada pae');
  }
});

adminLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  // abre para fazer login como admin
  const adminEmail = prompt('Digite o e-mail de administrador:');
  const adminPassword = prompt('Digite a senha de administrador:');

  // checar admin(alternative)
  if (adminEmail === 'admin@poggerdex.com' && adminPassword === 'password123') {
    // admin entrou certinho(alternative)
    window.location.href = 'poggerdex.html?admin'; // Redirect with admin flag
  } else {
    alert('Credenciais de administrador inválidas.');
  }
});