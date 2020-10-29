// constructor(startButton, moles, joker, peepTime, lives)
window.addEventListener('load' ,() => {

    const startButton = document.getElementById('start_btn');
    const moles = document.querySelectorAll('.mole');
    const joker = document.querySelectorAll('.joker');
    const scoreBoard = document.querySelector('.score');
    const gameLevel = document.getElementById('gameLevel');
    const holes = document.querySelectorAll('.hole');
    const howToPlay = document.getElementById("how_to_play")
    const lives = document.getElementsByClassName("noOfLives");
    const timer = document.getElementById('timeseconds')

    let timing = 90;
    let molesTimeout;
    
    
   // console.log("gamelevel",gameLevel.innerHTML)  
    let started = false;
    let score = 0;
    let level = 1;

    const levelTiming = () => {
        let difficulty = parseInt(gameLevel.innerText);

        switch(difficulty){
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
        }

        return time;
    }


    let levelTime = levelTiming();

    

    howToPlay.addEventListener('click', function () {
        alert('Your main objective is to score the maximum number of points before the time runs out, the higher the score, higer the level and more difficult will be. Good Luck!');
    });

    startButton.addEventListener('click', function () {
        if (started === false) {
            startGame();
        }
    });

    

    const startGame = () => {
        started = true;
        resetScoreAndTime();
        moleTime();
        
        let chrono = setInterval(() => {
            timing--;
            refreshNumbers();

            if (timing === 0) {
                clearInterval(chrono)
                endGame();
            }
        }, 1000);
    }

    const resetScoreAndTime = () => {
        // Write the initial settings of the game
        gameLevel.innerHTML = 1;
        scoreBoard.innerHTML = 0; 
        score = 0;
        level = 1;
    }

    const moleTime = () => {
        moles.forEach((button) => {
            button.classList.add('hidden');
            button.classList.remove('mole')
        });

        clearInterval(molesTimeout);
        
        setTimeout(() => {
            showMole();

            molesTimeout = setInterval(() => {
                moleTime();
    
            }, levelTime);

        }, Math.floor(Math.random() * 500) + 250);
        
    };



    const showMole = () => {
        activeMole = document.getElementById(`hole${Math.floor(Math.random() * 9) + 1}`);
        activeMole.classList.remove('hidden');
        activeMole.classList.add('mole');
    };
    

    moles.forEach(mole => mole.addEventListener('click', function () {
        score++;
        refreshNumbers();
        moleTime();
        levelTiming();
        levelUp();
    }))

    const levelUp = () => {
        if ( score === 10){
            level = 2;
        }else if(score === 20){
            level = 3;
        }else if ( score === 30){
            level = 4;
        }else if ( score === 40){
            level = 5;
        }

        gameLevel.innerHTML = level;
        console.log(levelTime);
    }

    const refreshNumbers = () => {
        timer.innerHTML = timing;
        scoreBoard.innerHTML = score;
        levelTime = levelTiming();
    }

    const endGame = () => {
        resetScoreAndTime();
        clearInterval(molesTimeout);
        alert("Time's out!");
        
    }

        
});

