class WhacktheJoker{
    
    // set the properties required for the game
    constructor(startButton, moles, joker, score, gameTime, peepTime, lives){
        this.btnStart = startButton
        this.moles = moles
        this.joker = joker
        this.score = score
        this.gameTime = gameTime
        this.peepTime = peepTime
        this.lives = lives
    }

    // how does mole peep with respect to speed and 
    peep() {
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

    comeOutAndStop(hole, peepTime) {
    // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
     hole.classList.add('up');
     setTimeout(() => {
         hole.classList.remove('up');
        if(!timeUp){
        peep();
         }
         },peepTime);

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
            console.log(In what a Joker);
        }
        
    }

