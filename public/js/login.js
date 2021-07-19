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
        document.location.replace('/');
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);