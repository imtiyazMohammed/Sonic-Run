score = 0;
cross = true;
audiogo = new Audio('gameover.mp3');
audio = new Audio('gameMusic.mp3');
setTimeout(() => {
    audio.play();
}, 500);
document.onkeydown = function (e) {
    console.log("Key code is: " + e.keyCode);
    if (e.keyCode == 38) {
        sonic = document.querySelector('.sonic');
        sonic.classList.add('animateSonic');
        setTimeout(() => {
            sonic.classList.remove('animateSonic');
        }, 700);
    }
    if (e.keyCode == 39) {
        sonic = document.querySelector('.sonic');
        sonicX = parseInt(window.getComputedStyle(sonic, null).getPropertyValue('left'));
        sonic.style.left = sonicX + 112 + "px";
    }
    if (e.keyCode == 37) {
        sonic = document.querySelector('.sonic');
        sonicX = parseInt(window.getComputedStyle(sonic, null).getPropertyValue('left'));
        sonic.style.left = (sonicX - 112) + "px";
    }
}
setInterval(() => {
    sonic = document.querySelector('.sonic');
    gameOver = document.querySelector('.gameOver');
    gameStart = document.querySelector('.gameStart');
    btn = document.querySelector('.btn');
    obstacle = document.querySelector('.obstacle');

    sx = parseInt(window.getComputedStyle(sonic, null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(sonic, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(sx - ox);
    offSetY = Math.abs(sy - oy);

    if (offSetX < 85 && offSetY < 52) {
        gameOver.style.visibility = 'visible';
        btn.style.visibility = 'visible';
        gameStart.style.visibility = 'hidden';
        sonic.classList.add('sonicOut');
        setTimeout(() => {
            sonic.style.visibility = 'hidden';
        }, 2000);
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        audio.pause();
        setTimeout(() => {
            audiogo.pause();
        }, 2000);
    }
    else if (offSetX < 145 && cross) {
        score++;
        updateCount(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateCount(score) {
    if(score <= 1){
    scoreCont.innerHTML = "Your score : " + (score-1);
}else{
scoreCont.innerHTML = "Your score : " + score;
}
}
function refreshPage(){
        location.reload();
    }