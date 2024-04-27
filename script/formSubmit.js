const fs = require('fs');

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
        
        // Read the JSON file
        const data = fs.readFileSync('followers.json');

        // Parse the JSON data into a JavaScript object
        const jsonData = JSON.parse(data);

        // Define the new object to be added
        const newFollower = {
            "followerSprite": `${form.followerForm}`,
            "name": `${form.name +" " +form.firstChild}`,
            "comment": "C'était le meilleur jour de ma vie"
        };

        // Add the new object to the list
        jsonData.push(newFollower);

        // Stringify the updated JavaScript object and write it back to the JSON file
        fs.writeFileSync('followers.json', JSON.stringify(jsonData, null, 2));        

        form.submit();
        } else {
        // If the form is not valid, display the browser's default validation messages
        form.reportValidity();
        }
    });
});

