import { pickRandomColor } from './color.js';
import {Card} from "./card";

//A Person has a CardDeck (which consists of 5 Cards with different colors). The cardDeck is first initialized
export class Person {
    constructor() {
        this.cardDeck = [];
        this.openCards = 0;
        this.initializeCardDeck();
    }

    //Initializing the CardDeck, so that a color only is contained once.
    initializeCardDeck() {
        let i = 0;

        while (this.cardDeck.length < 6) {
            let color = pickRandomColor();
            while (this.cardDeck.includes(color)) {
                color = pickRandomColor();
            }
            this.cardDeck[i] = new Card(color);
            i++;
        }
    }
}
