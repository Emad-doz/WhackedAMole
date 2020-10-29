// constructor(startButton, moles, joker, peepTime, lives)
window.addEventListener('load' ,() => {


    const startButton = document.getElementById('start_btn');
    const moles = document.querySelectorAll('.mole');
    const joker = document.querySelectorAll('.joker');
    const scoreBoard = document.querySelector('.score');
    const gameLevel = document.getElementById('gameLevel');
    const holes = document.querySelectorAll('.hole');
    const howToPlay = document.getElementById("how_to_play")
    const lives = document.getElementById("noOfLives");
    const timer = document.getElementById('timeseconds')

    let timing = 60;
    let molesTimeout;
    let gameEnded = false;
    
   // console.log("gamelevel",gameLevel.innerHTML)  
    let started = false;
    let score = 0;
    let level = 1;
    let life = parseInt(lives.innerHTML);

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
        alert('Your main objective is to hit the mole to score points, if you hit Malcolm you will lose 1 life, the game ends if you run out of lives or the time reaches 0. The higher the score the difficulty will increase. Good Luck!');
    });

    startButton.addEventListener('click', function () {
        if (started === false) {
            startGame();
        }
    });

    const startGame = () => {
        started = true;
        gameEnded = false;
        resetScoreAndTime();
        moleTime();

        
        let chrono = setInterval(() => {
            timing--;
            refreshNumbers();

            if (timing === 0 || lives === 0) {
                clearInterval(chrono);
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
        timer.innerHTML = timing;
        lives.innerHTML = 3;
    }

    const moleTime = () => {
        holes.forEach((button) => {
            button.classList.add('hidden');
            button.classList.remove('moles');
            button.classList.remove('joker');
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
        if (!gameEnded) {

            activeJoker = document.getElementById(`hole${Math.floor(Math.random() * 9) + 1}`);
            activeMole = document.getElementById(`hole${Math.floor(Math.random() * 9) + 1}`);
            do {
                activeJoker = document.getElementById(`hole${Math.floor(Math.random() * 9) + 1}`);
            } 
            while (activeJoker === activeMole);
            activeJoker.classList.remove('hidden');
            activeJoker.classList.add('joker');
            activeMole.classList.remove('hidden');
            activeMole.classList.add('moles');
        }
        
    };
    
    moles.forEach(mole => mole.addEventListener('click', function () {
        if (mole.classList.contains('moles')) {
            score++;
            refreshNumbers();
            moleTime();
            levelTiming();
            levelUp();
        } else if (mole.classList.contains('joker')) {
            life--;
            refreshNumbers();
            moleTime();
            stillAlive();
        }
        
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
        lives.innerHTML = life;
    }


    const endGame = () => {
        gameEnded = true;
        clearInterval(chrono);
        clearInterval(molesTimeout);
        alert("Game's end");
        
    }

        
});

