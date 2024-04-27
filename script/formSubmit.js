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
            
            // Define the new object to be added
            const newFollower = {
                "followerSprite": formdata.get('followerForm'),
                "name": formdata.get('name') + " " + formdata.get('firstChild'),
                "comment": "C'était le meilleur jour de ma vie"
            };

            // Convert the new object to JSON
            const newFollowerJson = JSON.stringify(newFollower);

            // Fetch the existing JSON data
            fetch('https://ink81100.github.io/script/comment/comment.json')
            .then(response => response.json())
            .then(data => {
                // Add the new follower to the existing data
                data.push(newFollower);

                // Send the updated data to the server
                fetch('/addFollower', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    // Optionally, you can redirect or show a success message here
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // Optionally, you can show an error message here
                });
            })
            .catch((error) => {
                console.error('Error fetching JSON:', error);
            });

            // Optionally, you can submit the form or redirect the user here
        } else {
            // If the form is not valid, display the browser's default validation messages
            form.reportValidity();
        }
    });
});
