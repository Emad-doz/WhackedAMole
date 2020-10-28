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
    const lives = document.getElementsByClassName("noOfLives");
    const gameTime = 60000;
    
   // console.log("gamelevel",gameLevel.innerHTML)  
    let lastHole;
    let timeUp = false;
    let score = 0;
    let level = 1;
    console.log(startButton);
    startButton.addEventListener('click', function () {
        startGame();
        showBtnAnimation();
       console.log("test");
        
    });
 
    function showBtnAnimation() {
        event.preventDefault(); 

        startButton.classList.add('started');
        
        setTimeout(() => {
            startButton.classList.remove('started');
           // startButton.style.display = 'none'; 
        }, gameTime);
    }

    function peep() {
        const peepTime = whackedTheMole.speed(gameLevel);
        const hole = whackedTheMole.randomHole(holes);
        comeOutAndStopMole(hole, peepTime);
    }

    function comeOutAndStopMole(hole, peepTime) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
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

    /*function comeOutAndStopJoker(hole, peepTime) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
         hole.classList.remove('hidden');
         hole.classList.add('joker')
         setTimeout(() => {
             hole.classList.add('hidden');
             hole.classList.remove('joker');
        if(!whackedTheMole.gameIsFinished()){
        	peep();
        }
      },peepTime);
    }*/


    function startGame() {
        resetScoreAndTime();
        peep();
        
        setTimeout(() => {
            //  Write what will happen when the game time is over
            timeUp = true;
            //titleH1.innerHTML="TIME UP！";
            startButton.style.display='inline';
            startButton.innerHTML="Replay！";
            scoreBoard.innerHTML=score;
        }, gameTime)
    }

    /**
     * Initialize settings.
     */
    function resetScoreAndTime() {
        // Write the initial settings of the game
        gameLevel.innerHTML = 1;
        scoreBoard.innerHTML = 0; 
        timeUp = false;
        score = 0;
        gameTime;
    }
    /**
     *Hit the mole. Add a click event for each mole, the score will show +1 after clicking, and the mole enters the hole
     */
    moles.forEach(mole => mole.addEventListener('click', function (e) {
        //  Write here what happened when the user clicked the mole.
        	console.log(e);
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
            
            console.log(score);
            
        }   
        
        
    }));

    //Click event listener for how to play button
    /*howToPlay.addEventListener('click', function myFunction() {
            var popup = document.getElementsByClassName("how_to_play");
            popup.classList.toggle("show");
          
    })*/


    joker.forEach(joker => joker.addEventListener('click', function (e) {
        //  Write here what happened when the user clicked the joker.
        	console.log(e);
    	if(!timeUp){
            lives --;
            life.innerHTML=lives
            
    	}    	
    }));


    




});
   
/* const whacktheMole = new WhackedTheMole();
whacktheMole.gameIsFinished(lives,timeUp);
const whackTheJoker = new WhacktheJoker();
whackTheJoker.test(); */