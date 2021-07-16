const loginFormHandler = async (event) => {
    event.preventDefault();

    const test = document.querySelectorAll(".radios");
    let image_url = "";

    test.forEach((el)=>{
        if(el.checked){
            image_url = el.value;
        }
    })

    console.log(image_url);
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);