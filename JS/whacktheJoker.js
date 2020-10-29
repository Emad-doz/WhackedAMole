



const whackedTheMole = new WhackedTheMole()


// constructor(startButton, moles, joker, showTime, lives)
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
    });

    function show() {
        const showTime = whackedTheMole.speed(gameLevel);
        const hole = whackedTheMole.randomHole(holes);
        comeOutAndStopMole(hole, showTime);
    }

    function comeOutAndStopMole(hole, showTime) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (show).
         hole.classList.remove('hidden');
         hole.classList.add('mole')
         setTimeout(() => {
             hole.classList.add('hidden');
             hole.classList.remove('mole');
        if(!whackedTheMole.gameIsFinished()){
        	show();
        }
      },showTime);
    }

    /*function comeOutAndStopJoker(hole, showTime) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (show).
         hole.classList.remove('hidden');
         hole.classList.add('joker')
         setTimeout(() => {
             hole.classList.add('hidden');
             hole.classList.remove('joker');
        if(!whackedTheMole.gameIsFinished()){
        	show();
        }
      },showTime);
    }*/


    function startGame() {
        resetScoreAndTime();
        show();
        
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



class WhackedTheMole {
    constructor(startButton, moles, joker, showTime, lives){
        this.btnStart = startButton
        this.moles = moles
        this.joker = joker
        this.showTime = showTime
        this.lives = lives
    }

   

    randomHole(holes) {
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
        let hole = 0
        let lastHole = 0
    		let holeNumber = Math.floor(Math.random()*9);
    		hole = holes[holeNumber];
    	if(lastHole!=null){
    	
    		 if(hole === lastHole){
    		 	this.randomHole()
    		 }
    	}else{
    		lastHole = hole;
    	} 
       return hole;
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
        //console.log(holes);
       //return null;
    }

}


class WhacktheJoker{
    
    // set the properties required for the game
    constructor(startButton, moles, joker, score, gameTime, showTime, lives){
        this.btnStart = startButton
        this.moles = moles
        this.joker = joker
        this.score = score
        this.gameTime = gameTime
        this.showTime = showTime
        this.lives = lives
    }

    // how does mole show with respect to speed and 
    show() {
        const time = speed(); // ??? 
        const hole = randomHole(holes);
        comeOutAndStop(hole, time);
    }

    speed() {
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
    }
        
    randomHole() {
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
            let hole = 0;
            let lastHole = 0
    		let holeNumber=Math.floor(Math.random()*9);
    		hole=holes[holeNumber];
    	    if(lastHole!=null){
                    
                if(hole===lastHole){
                    randomHole(hole) 
                    }
                    else{
                        lastHole=hole;
    	            }
    	} 
       return hole;
    }

    comeOutAndStop(hole, showTime) {
    // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (show).
     hole.classList.add('up');
     setTimeout(() => {
         hole.classList.remove('up');
        if(!timeUp){
        show();
         }
         },showTime);

    }

    gameIsFinished(lives,timeUp){
        // write the logic for finishing the game
      /*   if(lives === 0 && timeUp === true) {
            alert("Gameover");
        }else{
            alert("Continue the game")
        } */
        console.log("Game Over");
        
        }

        test(){
            console.log("In what a Joker");
        }
        
    }

