window.addEventListener('load' ,() => {
    const startButton = document.getElementById('start_btn');
    const moles = document.querySelectorAll('.mole');
    const scoreBoard = document.querySelector('.score');
    const gameLevel = document.getElementById('gameLevel');
    const holes = document.querySelectorAll('.hole');
    const howToPlay = document.getElementById("how_to_play")
    const lives = document.getElementById("noOfLives");
    const timer = document.getElementById('timeseconds');
    const instructionDisplay=document.getElementById("popup1");
    instructionDisplay.style.display = "none";

    let timing = 60;
    let molesTimeout;
    let gameEnded = false;
    let started = false;
    let score = 0;
    let level = 1;
    let life = parseInt(lives.innerHTML);

    const levelTiming = () => {
        let difficulty = parseInt(gameLevel.innerText);
        switch(difficulty){
            case 1 :
                time = 1500;
                break;
            case 2 :
                time = 1250;
                break;
            case 3 :
                time = 1000;
                break;
            case 4 :
                time = 800;
                break;
            case 5 :
                time = 600;
        }
        return time;
    }

    let levelTime = levelTiming();

    howToPlay.addEventListener('click', function () {
        const newWindowContent = document.getElementById("popup1").innerHTML;
        let newWindow = window.open("", "", "width=500,height=200");
        newWindow.document.write(newWindowContent);  
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

            if (timing === 0) {
                clearInterval(chrono);
                endGame();
            }
        }, 1000);
    }

    const resetScoreAndTime = () => {
        gameLevel.innerHTML = 1;
        scoreBoard.innerHTML = 0; 
        score = 0;
        level = 1;
        timer.innerHTML = timing;
        lives.innerHTML = 3;
    }

    const moleTime = () => {
        if(!gameEnded) {
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
        }
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
    }));

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
    }

    const refreshNumbers = () => {
        timer.innerHTML = timing;
        scoreBoard.innerHTML = score;
        levelTime = levelTiming();
        lives.innerHTML = life;
    }

    const stillAlive = () => {
        if (life <= 0) {
            endGame();
        }
    }

    const endGame = () => {
        gameEnded = true;
        if (life === 0) {
            alert(`You ran out of lives, but your score is ${score}!`);
        } else {
            alert(`Congrats! your score is ${score}`);
        }
        location = location;
    }
});
