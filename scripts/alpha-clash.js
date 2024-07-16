// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

//  Capture event handler 
function handelKyePress(event) {
    const playerPress = event.key
    console.log('Payer Press Button', playerPress);

    // get the express to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabate = currentAlphabetElement.innerText.toLocaleLowerCase();
    console.log(currentAlphabate, playerPress);

    // check match or not 
    if (playerPress === currentAlphabate) {
        console.log('You got a point');
        // console.log('You press right', currentAlphabate);

        const currentScoreTextElement = document.getElementById('current-score');
        const currentScoreText = currentScoreTextElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        const newScore = currentScore + 1;
        currentScoreTextElement.innerText = newScore;


        removeBackgroundColorById(currentAlphabate)
        continueGame();
    }
    else {
        console.log("Tuli tui bessa-magi")
        const currentLifeEle = document.getElementById('current-life');
        const currentLifeText = currentLifeEle.innerText;
        const lifeScore = parseInt(currentLifeText);
        const newLife = lifeScore - 1;
        currentLifeEle.innerText = newLife;
        if ( newLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handelKyePress)

function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}