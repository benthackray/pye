const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();
  
    if (username && email && password && password === confirmPassword) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('You are signed up!');
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  