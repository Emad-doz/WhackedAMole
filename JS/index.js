const whackedTheMole = new WhackedTheMole()


// constructor(startButton, moles, joker, peepTime, lives)
window.addEventListener('load' ,() => {

    const startButton = document.getElementById('btn123');
    const moles = document.querySelectorAll('.mole');
    const joker = document.querySelectorAll('.joker')
    const scoreBoard = document.querySelector('.score');
    const gameLevel = document.getElementsByClassName('.gameLevel');
    const holes = document.querySelectorAll('.hole');
    const howToPlay = document.getElementsByClassName("how_to_play")
    const lives = document.getElementsByClassName("noOfLives");
    let gameTime = 60000;

    let lastHole;
    let timeUp = false;
    let score = 0;
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
            startButton.style.display = 'none'; 
        }, gameTime);
    }

    function peep() {
        const peepTime = whackedTheMole.speed(gameLevel);
        const hole = whackedTheMole.randomHole(holes);
        comeOutAndStop(hole, peepTime);
    }

    function comeOutAndStop(hole, peepTime) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
         hole.classList.remove('hidden');
         setTimeout(() => {
         	hole.classList.add('hidden');
        if(!gameIsFinished()){
        	peep();
        }
      },peepTime);
    }


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
        score = 00;
        gameTime = 60000;
    }

    /**
     * Out of the hole.
     */

    /*function peep() {
        const time = speed();
>>>>>>> 9a476805ae5c0398546c5231b7a5f2223d8a0850
        const hole = randomHole(holes);
        comeOutAndStop(hole, time);
    }*/

    /*function speed() {
        // Write the logic to get the speed of the mole 
        switch(titleH2.innerHTML){
            case 1 :
                time = 2500;
                break;
            case 2 :
                time = 2000;
                break;
            case 3 :
                time = 1500;
                break;
            case 4 :
                time = 1000;
                break;
            default:
                time = 2500;
        }

        return time;
    }*/

    /*function randomHole(holes) {
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
        let hole;
    		let holeNumber=Math.floor(Math.random()*9);
    		hole=holes[holeNumber];
    	if(lastHole!=null){
    	
    		 if(hole==lastHole){
    		 	let holeNumber=Math.floor(Math.random()*6);
    		hole=holes[holeNumber];
    		 }
    	}else{
    		lastHole=hole;
    	} 
       return hole;
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
        //console.log(holes);
       //return null;
    }*/

    
    /*function comeOutAndStop(hole, time) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
         hole.classList.add('up');
         setTimeout(() => {
         	hole.classList.remove('up');
        if(!timeUp){
        	peep();
        }
      },time);
    }*/

    /**
     *Hit the mole. Add a click event for each mole, the score will show +1 after clicking, and the mole enters the hole
     */
    moles.forEach(mole => mole.addEventListener('click', function (e) {
        //  Write here what happened when the user clicked the mole.
        	console.log(e);
    	if(!timeUp){
            score ++;
            scoreBoard.innerHTML=score;

            if (0 < score < 9 ){
                titleH2.innerHTML = 1
            } else if (9 < score < 19) {
                titleH2.innerHTML = 2
            } else if (20 < score < 29) {
                titleH2.innerHTML = 3
            } else if (30 < score < 40) {
                titleH2.innerHTML = 4
            }
    	}    
    }));

    //Click event listener for how to play button
    howToPlay.addEventListener('click', function myFunction() {
            var popup = document.getElementsByClassName("how_to_play");
            popup.classList.toggle("show");
          
    })


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