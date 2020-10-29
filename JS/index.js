const whackedTheMole = new WhackedTheMole()


// constructor(startButton, moles, joker, peepTime, lives)
window.addEventListener('load' ,() => {

    const startButton = document.getElementById('start_btn');
    const moles = document.querySelectorAll('.mole');
    const joker = document.querySelectorAll('.joker');
    const scoreBoard = document.querySelector('.score');
    const gameLevel = document.getElementById('gameLevel');
    const holes = document.querySelectorAll('.hole');
    const howToPlay = document.getElementsByClassName("how_to_play")
    const lives = document.getElementById('noOfLives');
    const gameTime = 60000;
    let timeUp = false;
    let score = 0;
    let level = 1;
    let life =3;
   
    startButton.addEventListener('click', function () {
        startGame();
        showBtnAnimation();
    });
 
    function showBtnAnimation() {
        event.preventDefault(); 

        startButton.classList.add('started');
        
        setTimeout(() => {
            startButton.classList.remove('started');
        }, gameTime);
    }

    function peep() {
        const peepTime = whackedTheMole.speed(level);
        const hole = whackedTheMole.randomHole(holes);
        comeOutAndStopMole(hole, peepTime);
    }

    function comeOutAndStopMole(hole, peepTime) {
         hole.classList.remove('hidden');
         hole.classList.add('mole')
         setTimeout(() => {
             hole.classList.add('hidden');
             hole.classList.remove('mole');
        if(!whackedTheMole.gameIsFinished()){
        	peep();
        }
      },peepTime);
    }

    function startGame() {
        resetScoreAndTime();
        peep();
        
        setTimeout(() => {
            timeUp = true;
            startButton.style.display='inline';
            startButton.innerHTML="Replay！";
            scoreBoard.innerHTML=score;
        }, gameTime)
    }
    
    function resetScoreAndTime() {
        gameLevel.innerHTML = 1;
        scoreBoard.innerHTML = 0; 
        timeUp = false;
        score = 0;
        gameTime;
    }
    
   /* moles.forEach(mole => mole.addEventListener('click', function (e) {
        if(!timeUp){
            score ++;
            if ( score === 10){
                level = 2;
            }else if(score === 20){
                level = 3;
            }else if ( score === 30){
                level = 4;
            }
            gameLevel.innerHTML = level;
            scoreBoard.innerHTML = score; 
        }      
    }));*/

    joker.forEach(joker => joker.addEventListener('click', function (e) {
        //  Write here what happened when the user clicked the joker.
    	if (!timeUp){
            life --;
            if (life > 0){
                lives.innerHTML = life;
            } else {
                whackedTheMole.gameIsFinished();
            }
    	}    	
    }));
});