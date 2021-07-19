const passwordFormHandler = async (event) => {
    event.preventDefault();

    const password = document.querySelector('#new-password').value.trim();
    const confirmPassword = document.querySelector('#confirm-new-password').value.trim();


    if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
    }

    if (password) {

        const response = await fetch('/api/user/password', {
            method: 'PUT',
            body: JSON.stringify({ password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Successfully updated password!');
            document.location.reload();
        } else {
            alert('Failed to update password');
        }
    }
};

document
    .querySelector('.password-form')
    .addEventListener('submit', passwordFormHandler);