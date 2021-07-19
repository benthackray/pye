const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#sign-in-form-username').value.trim();
    const password = document.querySelector('#sign-in-form-password').value.trim();
    // console.log(email +" "+password);
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('test');
  
      if (response.ok) {
        alert('You are logged in!');
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);