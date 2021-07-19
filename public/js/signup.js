const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();
    const avatars = document.querySelectorAll(".radios");
    let profile_img = "";

    avatars.forEach((el)=>{
        if(el.checked){
            profile_img = el.value;
        }
    })

    if (password === confirmPassword && username && email && password && profile_img) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, profile_img }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  