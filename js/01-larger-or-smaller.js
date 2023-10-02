let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

//Check which is the larger number
if (num1 === num2) {
  console.log("Both numbers are equal: " + num1);
} else if (num1 > num2) {
  console.log("The larger number is: " + num1);
} else {
    console.log("The larger number is: " + num2);
}