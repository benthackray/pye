const createFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#search_input').value.trim();
    const category = document.querySelector('#category').value;
    if (name) {
        if (category !== "none") {
            document.location.assign(`/both/${name}/${category}`);
        } else {
            document.location.assign(`/name/${name}`);
        }
    } else {
        if (category !== "none") {
            document.location.assign(`/category/${category}`);
        }else{
            document.location.assign(`/`)
        }
    }
};


document
    .querySelector('#search_bar')
    .addEventListener('submit', createFormHandler);