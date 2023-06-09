import { pickRandomColor } from './color.js'

//When a Dice is rolled it just returns a random Color from the pre-defined colors in 'colors.js'
export const rollDice = () => {
    return pickRandomColor();
};