//Prompt user for number between 1 and 100
let score = parseInt(prompt("Enter a number between 1 - 100:"));
//Check valid input
if (score >= 1 && score <= 100) {
    //Else/If statements
    if (score >= 90 && score <= 100) {
        console.log("You received an A");
    } else if (score >= 80 && score <= 89) {
        console.log("You received a B");
    } else if (score >= 70 && score <= 79) {
        console.log("You received a C");
    } else if (score >= 60 && score <= 69) {
        console.log("You received a D");
    } else {
        console.log("You received an F");
    }
} else {
    console.log("Only numbers between 1 and 100 are valid.")
}