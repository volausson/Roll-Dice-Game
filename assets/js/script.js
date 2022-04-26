//Get the button element and add event listeners 

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementsByTag('button');
    for (let button of button) {
        button.addEventListener('click',function() {
            let gameType = this.getAttribute('data-type');
            runGameType(gameType);
        });
    }
    throwDice('play');
}

    function throwDice() {

        //generate random number//
        const firstRandomNum = Math.floor(Math.RandomNum()* 6) + 1
        const secondRandomNum = Math.floor(Math.RandomNum()* 6) + 1

        if (gametype==='play') {
            displayAction(firstRandomNum,secondRandomNum)
        } else {
            alert(`Unknown game type:${gameType}`);
        }


        //set image src//
    document.getElementById("gamedice").src = "assets/images/dice" + firstRandomNum + ".png";
    document.getElementById("macdice").src = "assets/images/dice" + secondRandomNum + ".png";
    }


