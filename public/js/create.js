const createFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const category = document.querySelector('#category').value;
    const options = document.querySelectorAll(".options");
    let labels = [];
    let data = [];

    options.forEach((el)=>{
        if (el.value){ 
        console.log(el.value)
        labels.push(el.value)
        data.push(0)
        }
    })

    labels = JSON.stringify(labels);
    data = JSON.stringify(data);

    console.log(labels);
    console.log(data);

    if (name && category && labels && data ) {
      const response = await fetch('/api/pie/', {
        method: 'POST',
        body: JSON.stringify({ name, category, labels, data }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create pie');
      }
    }
  };
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', createFormHandler);