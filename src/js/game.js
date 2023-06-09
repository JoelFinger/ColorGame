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

    //Create a list of players
    const players = [alice, bob, carol, mario];

    let currentPlayerIndex = 0;

    //Define what one turn contains for a player
    const playTurn = () => {

        const diceColor = rollDice();
        if(players[currentPlayerIndex].cardDeck.includes(diceColor) && players[currentPlayerIndex].cardDeck[diceColor])


        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    };

    //Play the pre-defined turns in order until someone wins
    // while(){
    //     playTurn();
    // }

    //Show the results
};