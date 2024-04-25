document.addEventListener("DOMContentLoaded", function(){
    //On récupere les donnnées du json 
    fetch('http://ink81100.github.io/script/comment/comment.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const comments = data;
            console.log(comments);
            const commentsContainer = document.querySelector(".commentZone");
            commentsContainer.innerHTML += `<div class="smoke"><h3>Nos Avis</h3></div>
                                            <div class="comments"></div>`;

            for(let i of comments){
                //Ajout du contenue html
                commentsContainer.querySelector(".comments").innerHTML +=`
                    <section class="comment">
                        <div class="follower">
                            <img src="img/follower/${i.followerSprite}" alt="${i.followerSprite}">
                            <h3>${i.name}</h3>
                        </div>
                        <p>
                            ${i.comment}
                        </p>
                    </section>
                `;
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
})