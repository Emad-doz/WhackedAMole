window.onload = function () {

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const joker = document.querySelectorAll('.joker')
    const startBtn = document.getElementById('start_btn');
    const lifes1 = document.getElementById('lifes1');
    const lifes2 = document.getElementById('lifes2');
    const lifes3 = document.getElementById('lifes3')
    let titleH1 = document.getElementById('title3');
    let titleH2 = document.getElementById('title2');

    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;
    let lifes = 0;

    

    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault();

        startBtn.classList.add('started');
        // Button animation delay, what happens after the button animation ends: change to normal state (the start in the class is removed), the start button disappears
        setTimeout(() => {
            startBtn.classList.remove('started');
            startBtn.style.display = 'none';
        }, gameTime);
    }


    function startGame() {
        resetScoreAndTime();
        peep();

        setTimeout(() => {
            //  Write what will happen when the game time is over
             timeUp=true;
            titleH1.innerHTML="TIME UP！";
            startBtn.style.display='inline';
            startBtn.innerHTML="Replay！";
            scoreBoard.innerHTML=score;
        }, gameTime)
    }

    /**
     * Initialize settings.
     */
    function resetScoreAndTime() {
        // Write the initial settings of the game
        titleH1.innerHTML="WHACK-A-MOLE";
        titleH2.innerHTML= "1"
        scoreBoard.innerHTML=0;
        timeUp = false;
        score = 0;
        gameTime = 10000;
    }

    /**
     * Out of the hole.
     */
    function peep() {
        const time = speed();
        const hole = randomHole(holes);
        comeOutAndStop(hole, time);
    }

    function speed() {
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

    function randomHole(holes) {
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
    }

    
    function comeOutAndStop(hole, time) {
        // Write the hamster out of the hole and stay for the corresponding time. If the game time is not over (timeUp), continue to exit the hole (peep).
         hole.classList.add('up');
         setTimeout(() => {
         	hole.classList.remove('up');
        if(!timeUp){
        	peep();
        }
      },time);
    }

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

    joker.forEach(joker => joker.addEventListener('click', function (e) {
        //  Write here what happened when the user clicked the joker.
        	console.log(e);
    	if(!timeUp){
            lifes ++;

            switch(lifes){
                case 1 :
                    lifes1.classList.add('gray');
                    break;
                case 2 :
                    lifes1.classList.add('gray');
                    lifes2.classList.add('gray');
                    break;
                case 3 :
                    lifes1.classList.add('gray');
                    lifes2.classList.add('gray');
                    lifes3.classList.add('gray');
                    gameIsFinished();
            }
    	}    	
    }));

};