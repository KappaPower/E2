let something = prompt("Give me a number")
let number = + something

if (typeof (number) === 'number') {
    number % 2 === 0 ? console.log("чётное") : console.log("нечётное")
}
else {
    console.log("Упс, кажется, вы ошиблись")
}