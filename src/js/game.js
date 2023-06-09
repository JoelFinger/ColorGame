import {Person} from "./player";
import {rollDice} from "./dice";

const playingGame = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    //Create 4 persons
    const alice = new Person();
    const bob = new Person();
    const carol = new Person();
    const mario = new Person();

    //Create a count for the laps ("Spielrunden")
    let laps = 0;

    //Create a list of players
    const players = [alice, bob, carol, mario];

    let currentPlayerIndex = 0;

    //Define what one turn contains for a player
    const playTurn = () => {

        const diceColor = rollDice();

        //checks if the Player has the Card with the same Color as the Dice. If so and this card is hidden, then turn it and make is visible
        for (let i = 0; i < 6; i++){
            if(players[currentPlayerIndex].cardDeck[i].cardColor === diceColor && players[currentPlayerIndex].cardDeck[i].isVisible === false){
                players[currentPlayerIndex].cardDeck[i].isVisible = true;
                players[currentPlayerIndex].openCards += 1;
            }
        }

        //Define the turn of the next player
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    };

    //Play the pre-defined turns in order until someone wins. At the same time count the lapses
    while(players[currentPlayerIndex].openCards < 5){
        if(currentPlayerIndex === 0){
            laps++;
        }
        playTurn();
    }

    //Show the results - The Winner is players[currentPlayerIndex]
    // Idee: const playerlist = document.querySelector("#playerlist");
};