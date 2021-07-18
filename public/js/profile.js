

const clickHandler = async (event) => {
    event.stopPropagation();
    let el = event.target;
    if(el.tagName === "BUTTON"){
        event.preventDefault();

        const response = await fetch('/api/pie', {
            method: 'DELETE',
            body: JSON.stringify({ 
                pie_id: el.value,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed?');
        }
    }
};

document
    .querySelector('#user-pies')
    .addEventListener('click', clickHandler);
  