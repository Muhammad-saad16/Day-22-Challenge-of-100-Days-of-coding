//   🚀 Day 22 Challenge: Start Coding! 🚀

//Question 64
// Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30,
// it should give back "Age: 30".

function combineStringAndNumber(text: string, number: number): string {
    return text + number;
}

// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"


//Question 65: 
//Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign.
//For example, remainder(5, 2) should give 1.

function remainder(number1:number,number2:number) {
    return number1 % number2;
}
console.log(remainder(6,50)); // show 6 


//Question 66:
// Logical AND Verification: Create a function that checks two boolean (true or false) values. 
// It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(boolean1: boolean, boolean2: boolean) {
    return boolean1 && boolean2;
}

console.log(checkBothTrue(true, false)); // Shows false