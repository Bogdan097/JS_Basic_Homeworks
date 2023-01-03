/*
Write a function that will take an array of 5 numbers as a parameter and return the sum.
Print it in the console or in alert
BONUS**: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
*/

let arrayNumbers = [2, 4, 7, 5, 9]

function sum() {
    let sum = 2 + 4 + 7 + 5 + 9;
    console.log(sum)
}
sum(arrayNumbers)



//BONUS**: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.


// function validateNumber(a,b) {
//    if (Number.isNaN()) {
//     return "True"
//    } if (isNaN()) {
//     return "false"
//    }


// }

// console.log(validateNumber(2))
// console.log(validateNumber("ok"))      

// function is_number(input) {
//         return !isNaN(input) && toString.call(input) === '[object Number]';
//        }

// console.log(is_number(NaN));

// console.log(is_number(42.32));

// console.log(is_number(72));