
    const MyForm = document.getElementById('MyForm');

    MyForm.addEventListener('submit', (e) => {

        e.preventDefault();

        console.log('Form has been submitted:')

        const request = new XMLHttpRequest();

        request.open('post', 'form.js')
        request.onload = function() {
            console.log(request.responseText);
        }

        request.send();
    });
