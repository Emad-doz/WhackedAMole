const whackedTheMole  = new whackedTheMole();

window.onload = function () {

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const joker = document.querySelectorAll('.joker')
    const startBtn = document.getElementById('start_btn');
    const life1 = document.getElementById('life1');
    const life2 = document.getElementById('life2');
    const life3 = document.getElementById('life3')
    let titleH1 = document.getElementById('title3');
    let titleH2 = document.getElementById('title2');
    let howToPlay=document.getElementsByClassName("how_to_play")

    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;
    let life = 3;

    

    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault(); 

        startBtn.classList.add('started');
        
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
        titleH1.innerHTML="WHACK-A-MOLE"; // maha: do we need this ??
        titleH2.innerHTML= "1" // // maha: do we need this ??
        scoreBoard.innerHTML=0; 
        timeUp = false;
        score = 0;
        gameTime = 10000;
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
            life --;

            switch(life){
                case 2 :
                    life1.classList.add('gray');
                    break;
                case 1 :
                    life1.classList.add('gray');
                    life2.classList.add('gray');
                    break;
                case 0 :
                    life1.classList.add('gray');
                    life2.classList.add('gray');
                    life3.classList.add('gray');
                    gameIsFinished();
            }
    	}    	
    }));

};