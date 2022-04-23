//Get the button element and add event listeners 

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementsByTagName 'button');

    for (let button of buttons) {
        button.addEventListener ('click', function() {
            if(this.getAttribute
               ('data-type') === 'pushToPlay' );
            
            });
        }

//Generate random number from 1 to 6 
function 

let firstRandomNum = Math.floor(Math.RandomNum()* 6) + 1
let secondRandomNum = Math.floor(Math.RandomNum()* 6) + 1

//generate img dice1 to dice6

let firstDiceImage = 'assets/dice' + firstRandomNum +'.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);







