    const firstname = document.getElementById('ime');
    const lastname = document.getElementById('prezime');
    const form = document.getElementById('forma');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        let messages = [];

        if(firstname.value === '' || firstname == null){
            messages.push('First name is required');
        }

        if(lastname.value === '' || lastname == null){
            messages.push('Last name is required');
        }

        if(messages.length > 0){
            e.preventDefault();
            errorElement.innerText = messages.join(', ');
        }
    })