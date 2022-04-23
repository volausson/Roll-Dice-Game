//Get the button element and add event listeners 

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementsByTagName 'button');

    


    function throwDice() {

        //generate random number//
        const firstRandomNum = Math.floor(Math.RandomNum()* 6) + 1
        const secondRandomNum = Math.floor(Math.RandomNum()* 6) + 1

        //set image src//
    document.getElementById("gamedice").src = "assets/images/dice" + firstRandomNum + ".png";
    document.getElementById("macdice").src = "assets/images/dice" + secondRandomNum + ".png";
    }





