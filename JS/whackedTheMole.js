class WhackedTheMole {
    constructor(startButton, moles, joker, peepTime, lives){
        this.btnStart = startButton
        this.moles = moles
        this.joker = joker
        this.peepTime = peepTime
        this.lives = lives
    }

   
    speed(gameLevel) {
        // Write the logic to get the speed of the mole 
        switch(gameLevel){
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

    gameIsFinished(lives,timeUp){
        // write the logic for finishing the game
        if(lives === 0 || timeUp === true) {
            alert("Gameover");
        }
        //console.log("Game Over");
        
    }
}
