document.addEventListener("DOMContentLoaded", function() {
    const foods = null;
    fetch('http://ink81100.github.io/script/food/foods.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const foods = data;
        const foodContainer = document.querySelector(".foodZone");

        for(let i of foods){
            // rajoute le contenu html 
            foodContainer.innerHTML +=`
            <div class="smoke"}">
                <div class="smoke-text">
                    <h2>${i.name}</h2>
                    <p>${i.description}</p>
                </div>
                <img src="../img/food/${i.image}" alt="${i.image}" class="food-image">
            </div>
            `;
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error,'check if you launched a local server on the correct port');
        
    });
})
