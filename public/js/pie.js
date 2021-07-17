const voteHandler = async (event) => {
    event.preventDefault();
    el = event.target;
    if(el.tagName === "BUTTON"){
        pie_id = document.querySelector('#vote-group').dataset.pie;
        //update vote api
        const response = await fetch('/api/vote', {
            method: 'POST',
            body: JSON.stringify({ 
                choice: el.value,
                pie_id
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Vote failed.');
        }
    }
};

document
    .querySelector('#vote-group')
    .addEventListener('click', voteHandler);
  