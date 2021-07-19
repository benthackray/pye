const usernameFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#new-username').value.trim();

    if (username) {
        const response = await fetch('/api/user/username', {
            method: 'PUT',
            body: JSON.stringify({ username }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Successfully updated Username!');
            document.location.reload();
        }
    }
};

document
    .querySelector('.username-form')
    .addEventListener('submit', usernameFormHandler);