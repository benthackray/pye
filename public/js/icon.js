const iconFormHandler = async (event) => {
    event.preventDefault();

    const profile_img = document.querySelector('#icon-url').value.trim();

    if (profile_img) {
        const response = await fetch('/api/user/icon', {
            method: 'PUT',
            body: JSON.stringify({ profile_img }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Successfully updated Icon!');
            document.location.reload();
        } else {
            alert('Failed to update icon, invalid image Url?');
        }
    }
};

document
    .querySelector('.icon-form')
    .addEventListener('submit', iconFormHandler);