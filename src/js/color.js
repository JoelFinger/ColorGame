//Create 6 different colors
const red = "#FF0000";
const blue = "#0000FF";
const yellow = "#FFFF00";
const green = "#00FF00";
const purple = "#800080";
const orange = "#FFA500";

//Create an Array containing the colors
const colors = [red, blue, yellow, green, purple, orange];

//This method returns one random color from the array of colors
export const pickRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex];
};
