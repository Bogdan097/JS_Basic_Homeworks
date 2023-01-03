/*
Title: Looping structures
Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14
Bonus: Try making the function work if there are other types of items in it
*/

let arrayNumbers = [-5, 12, 3, 7, 7, 9]
let max = arrayNumbers[0];
let counter = 0;
let min = arrayNumbers[0]

while (counter < arrayNumbers.length) {
    if (arrayNumbers[counter] > max) {

        max = arrayNumbers[counter];

    }
    counter++
}
console.log(`Max number is :${max}`);



while (counter < arrayNumbers.length) {
    if (arrayNumbers[counter] < min) {

        min = arrayNumbers[counter];

    }
    counter++;
}
console.log(`Min number is :${min}`);
sum = max + min;
console.log(`sum is ${sum}`)