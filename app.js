//Chapter 35-38
// 1. Write a function that displays current date & time in your
// browser.

// function currentDateTime () {
//     document.write(new Date())
// }

// currentDateTime()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function userFullName(firstName, lastName) {
//     document.write("Hello " + firstName + " " + lastName)
// }

// userFullName("Nabeel", "Khan")

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var num1 = +prompt("Input number 1");
// var num2 = +prompt("Input number 2");

// function sum (num1, num2) {
//     return num1 + num2;
// }

// alert(sum(num1, num2));

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var num1 = +prompt("Number 1")
// var Operator = prompt("Operator")
// var num2 = +prompt("Number 2")

// function calculate(num1, Operator, num2) {
//     if(Operator === "+") {
//         return num1 + num2
//     } else if(Operator === "-") {
//         return num1 - num2
//     } else if(Operator === "/") {
//         return num1 / num2
//     } else if(Operator === "%") {
//         return num1 % num2
//     } else if(Operator === "*") {
//         return num1 * num2
//     } else if (Operator === "**") {
//         return num1 ** num2
//     }
// }

// alert(calculate(num1, Operator, num2,))

//5. Write a function that squares its argument.
// var val = 10

// function squareVal(val) {
//     return val * val
// }

// alert(squareVal(val))

// 6. Write a function that computes factorial of a number.

// var factValue = +prompt("Input number for factorial");

// function factorialValue(factValue) {
// // var val = 0;    
//     for(var i = (factValue - 1); i > 0; i--) {
//          factValue *= i;
//     }
//     return factValue;
// }

// document.write(factorialValue(factValue));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var startNum = +prompt("Largest number");
// var endNum =  +prompt("Smallest number");

// function counting(startNum, endNum) {
//     for (var i = startNum; i > 0; i--) {
//         document.write(i + "<br>");
//     }
// }

// counting(startNum, endNum)

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// var baseValue = +prompt("Base value of right angled triangle");
// var PerpendicularValue = +prompt("Perpendicular of right angled triangled");

// function calculateHypotenuse(baseValue, PerpendicularValue) {
//     baseValue *= baseValue;
//     PerpendicularValue *= PerpendicularValue;
//     var Hypotenuse = PerpendicularValue + baseValue;
//     function calculateSquare(Hypotenuse) {
//         return Math.sqrt(Hypotenuse);
//     }

//     return calculateSquare(Hypotenuse)
// }

// document.write("Hypotenuse value of right angled triangle is: " + (calculateHypotenuse(baseValue, PerpendicularValue)).toFixed(2));

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// var height = 10

// function CalculateRectangle(width, height) {
//     var ractangleArea = width * height;
//     return ractangleArea;
// }

// document.write("Area of ractangle is: " + CalculateRectangle(15, height));

                            // 10. Write a JavaScript function that checks whether a passed
                                // string is palindrome or not?
                                // A palindrome is word, phrase, or sequence that reads the same backward as
                                // forward, e.g., madam.

// var userInput = prompt("Enter a word");

// function palimdromeWord(userInput) {
//     var check = "";
    
//     for (var i = userInput.length - 1; i >= 0; i--) {
//       check += userInput[i];
//     }
//     if (userInput.toLowerCase() === check) {
//       document.write(userInput + " is a palindrome word");
//     } else {
//       document.write(userInput + " is not a palindrome word");
//     }
// }

// palimdromeWord(userInput);

                            // 11. Write a JavaScript function that accepts a string as a
                                // parameter and converts the first letter of each word of the
                                // string in upper case.
                                // EXAMPLE STRING : 'the quick brown fox'
                                // EXPECTED OUTPUT : 'The Quick Brown Fox'
var userInput = "nabeel khan";

function toTitleCase(userInput) {
    userInput = " " + userInput;
    var titleCase = [];
    for(var i = 0; i < userInput.length; i++) {
        if(userInput[i] === " ") {
            userInput = (userInput[i+ 1]).toUpperCase()
        }
    }
    console.log(userInput);
}

toTitleCase(userInput);