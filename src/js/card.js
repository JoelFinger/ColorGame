import { pickRandomColor } from './color.js'

// const cardColor = pickRandomColor();
// let isVisible = false;

export class Card {
    constructor(color) {
        this.cardColor = color;
        this.isVisible = false;
    }

}