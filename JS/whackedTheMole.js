class whackedTheMole {
    constructor(){
        this.holes = []
        this.timeUp = timeUp
        this.lives = lives
    }

    peep() {
        const time = speed();
        const hole = randomHole();
        comeOutAndStop(hole, time);
    }

    speed(number) {
        // Write the logic to get the speed of the mole 
        switch(number){
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

    comeOutAndStop(hole, time) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
         hole.classList.add('up');
         setTimeout(() => {
         	hole.classList.remove('up');
        if(!gameIsFinished()){
        	peep();
        }
      },time);
    }

    gameIsFinished(){
        
    }
}