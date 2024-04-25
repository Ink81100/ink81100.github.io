/**
 * Anime le bouton quand la sourie est dessus
 * @param {*} buttonOver 
 * @param {*} buttonOut 
 * @returns none
 */
function changeStateOver(buttonOver,buttonOut){
    buttonOut.style.display = "none";
    buttonOver.style.display = "block";

    //Animation du boutton
    buttonOver.animate([
        {scale: 1},
        {scale: 1.05}
    ],{
        duration:100,
        easing: "ease-in-out",
        fill: 'forwards'//Garde le dernier état
    });
}


/**
 * Animer le bouton quand la sourie n'est plus dessue
 * @param {*} buttonOver 
 * @param {*} buttonOut 
 */
function changeStateOut(buttonOver,buttonOut){
    buttonOver.style.display = "none";
    buttonOut.style.display = "block";
    //Animation du boutton
    buttonOut.animate([
        {scale: 1.05},
        {scale: 1}
    ],{
        duration:100,
        easing: "ease-in-out",
        fill: 'forwards'//Garde le dernier état
    });
}

const buttonContainers = document.querySelectorAll(".buttonText");

/**
 * Bouton de texte 
 */
buttonContainers.forEach(buttonContainer => {
    const buttonContainerLink = buttonContainer.querySelector("a");
    const buttonOver = buttonContainerLink.querySelector(".buttonOver");
    const buttonOut = buttonContainerLink.querySelector(".buttonOut");
    const textElement = buttonContainerLink.querySelector('span');

    //Style du texte
    textElement.style.position = 'absolute';
    textElement.style.top = '50%';
    textElement.style.left = '50%';
    textElement.style.transform = 'translate(-50%, -50%)';
    textElement.style.color = '#070403'; 
    textElement.style.fontSize = '20px';
    textElement.style.fontWeight = 'bold';
    textElement.style.fontFamily = 'Pizzola-Bold';

    buttonContainerLink.appendChild(textElement);

    buttonContainer.addEventListener("mouseover", (event) => {
        //Vérifie si la sourie est toujours dans le contenair
        if (!buttonContainer.contains(event.relatedTarget)) {
            changeStateOver(buttonOver, buttonOut);
        }
    });

    buttonContainer.addEventListener("mouseleave", (event) => {
        changeStateOut(buttonOver, buttonOut);
    });
});