class WhackedTheMole {
    constructor(startButton, moles, joker, score, gameTime, peepTime, lives){
        this.btnStart = startButton
        this.moles = moles
        this.joker = joker
        this.score = score
        this.gameTime = gameTime
        this.peepTime = peepTime
        this.lives = lives
    }

    peep() {
        const peepTime = speed();
        const hole = randomHole();
        comeOutAndStop(hole, peepTime);
    }

    speed(number) {
        // Write the logic to get the speed of the mole 
        switch(number){
            case 1 :
                this.peepTime = 2500;
                break;
            case 2 :
                this.peepTime = 2000;
                break;
            case 3 :
                this.peepTime = 1500;
                break;
            case 4 :
                this.peepTime = 1000;
                break;
            default:
                this.peepTime = 2500;
        }
        return this.peepTime;
    }

    randomHole() {
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
        let hole = 0
        let lastHole = 0
    		let holeNumber = Math.floor(Math.random()*9);
    		hole = holes[holeNumber];
    	if(lastHole!=null){
    	
    		 if(hole == lastHole){
    		 	randomHole()
    		 }
    	}else{
    		lastHole = hole;
    	} 
       return hole;
        // Write the logic that the hamster randomly chooses to drill a hole, if it is the same hole as the previous one, then select a hole again.
        //console.log(holes);
       //return null;
    }

    comeOutAndStop(hole, peepTime) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
         hole.classList.add('up');
         setTimeout(() => {
         	hole.classList.remove('up');
        if(!gameIsFinished()){
        	peep();
        }
      },peepTime);
    }
    
    gameIsFinished(lives,timeUp){
        // write the logic for finishing the game
        if(lives === 0 && timeUp === true) {
            alert("Gameover");
        }else{
            alert("Continue the game")
        }
        //console.log("Game Over");
        
    }
        
    
}