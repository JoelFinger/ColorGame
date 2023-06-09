import { pickRandomColor } from './color.js'

// const cardColor = pickRandomColor();
// let isVisible = false;

export class Card {
    constructor() {
        this.cardColor = pickRandomColor();
        this.isVisible = false;
    }

}