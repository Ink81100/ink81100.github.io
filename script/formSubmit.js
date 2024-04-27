document.addEventListener("DOMContentLoaded", function(){
    // Get the form element
    const form = document.getElementById('myform');

    // Get the element that triggers form submission
    const submitElement = document.querySelector('.submit');

    // Attach a click event listener to the submitElement
    submitElement.addEventListener('click', function(event) {
        // Prevent the default action of the click event
        event.preventDefault();

        // Check if the form is valid
        if (form.checkValidity()) {
        // If the form is valid, submit it programmatically
        const formdata = new FormData(form);
        console.log(formdata);
        form.submit();
        } else {
        // If the form is not valid, display the browser's default validation messages
        form.reportValidity();
        }
    });
});

