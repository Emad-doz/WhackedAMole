class WhackedTheMole {
    constructor(startButton, moles, joker, peepTime, lives){
        this.btnStart = startButton
        this.moles = moles
        this.joker = joker
        this.peepTime = peepTime
        this.lives = lives
    }

   
    speed(gameLevel) {
        switch(gameLevel){
            case 1 :
                this.peepTime = 1500;
                break;
            case 2 :
                this.peepTime = 1500;
                break;
            case 3 :
                this.peepTime = 1000;
                break;
            case 4 :
                this.peepTime = 500;
                break;
            default:
                this.peepTime = 250;
        }
        return this.peepTime;
    }

    randomHole(holes) {
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
    }

    gameIsFinished(lives,timeUp){
        if(lives === 0 || timeUp === true) {
            alert("Gameover");
        }
    }
}