'use strict';
const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    email: formData.get('email').trim(),
    password: formData.get('password').trim(),
  };

  if (!data.email || !data.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(data);
  form.reset();
});