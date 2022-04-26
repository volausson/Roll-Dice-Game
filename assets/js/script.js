    var gamerTotalScore = 0;
    var machineTotalScore = 0;
    var numberOfGoes = 10;

    function throwDice() {

        // scores
        const gamerScore = document.getElementById('score-Gamer');
        const machineScore = document.getElementById('score-Machine');

        //generate random number
        const firstRandomNum = Math.floor(Math.Random()* 6) + 1
        const secondRandomNum = Math.floor(Math.Random()* 6) + 1
         
        //set dice image
    document.getElementById("gamedice").src = "assets/images/dice" + firstRandomNum + ".png";
    document.getElementById("macdice").src = "assets/images/dice" + secondRandomNum + ".png";
    numberOfGoes--;

    //find out who won the roll using firstRandomNum and secondRandomNum
        if (firstRandomNum > secondRandomNum) {
            //if firstRandomNum won then increment the gamer score
            gamerTotalScore ++;
            gamerTotalScore.innerText=gamerTotalScore.toString();
        }
        if (secondRandomNum > firstRandomNum) {
           //if secondRandomNum won then increment the machine score 
           machineTotalScore ++;
           machineTotalScore.innerText=machineTotalScore.toString();
        }
        

}


