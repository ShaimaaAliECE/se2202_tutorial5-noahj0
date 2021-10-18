let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
// let start = document.getElementById("gameboard"); --> dont think this is necessary
document.getElementById("next-lbl").innerHTML = nextPlayer;
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    for (let i = 0 ; i < 9; i++)
    {
        let cell = 'c' + (i+1);
        let button = document.createElement('button');
        button.innerHTML = '[ ]';
        document.getElementById(cell).appendChild(button);
        
    };
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
};

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
};

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    if (nextPlayer == "X")
    {
        event.target.innerText = nextPlayer;
        nextPlayer = "O";
        event.target.disabled = true;
        document.getElementById("next-lbl").innerHTML = nextPlayer;
    }else 
    {
        event.target.innerHTML = 'O';
        event.target.disabled = true;
        nextPlayer = 'X';
        document.getElementById("next-lbl").innerHTML = nextPlayer;
    };
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById("game-over-lbl").innerHTML = "<h1> Game Over! </h1>";
    };

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
};

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let counter = 0;
   for(i = 0; i < 9; i++)
   {
       if(btns[i].disabled == true)
       {
           counter++;
       }else{return false;};
   };
   if (counter == 9){return true;};
};