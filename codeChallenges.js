// Code Challenge week 1
// Write a function that takes the base and height of a triangle and return its area.
function calcAreaOfTriangle(base, height) {
    return base * height / 2;
}
//test the function
console.log(calcAreaOfTriangle(30, 15))

//Code Challenge week 2
function minMax(numberArray) {
    let minValue = Math.min(...numberArray);
    let maxValue = Math.max(...numberArray);
    return [minValue, maxValue];
}

console.log(minMax([10, 5, 8, 3, 12, 7]));


//Code Challenge week 3

function FirstReverse(str) {

    return str.split('').reverse().join('');

}

// keep this function call here
console.log(FirstReverse(readline()));


//Code Challenge week 4

let cat = "i%^& love12#$ catssss^&812"
let test = "test that if words are of equal leng@# @#th the first one gets retu^&*& rned$%";
function LongestWord(sen) {
//remove non-abc or 123 characters, replace them with a space
    sen = sen.replace(/[^0-9a-z]/gi, ' ');

//split string into an array, delimited by a space.
    words = sen.split(" ");

//initialize the longest variable
    let longest = '';
//loop through words array,
//check current values length and compare to 'longest' variable length.
//if current value larger, replace longest with current value.
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(LongestWord(cat));
console.log(LongestWord(test));

// CodeByte keep this function call here
console.log(LongestWord(readline()));



//Code Challenge 5
// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should
// return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(x) {
    //initialize sum
    sum = 0;
    // loop through integer
    for (let i = 0; i < x; i++) {
        //accumulate
        sum += i;
    }
    return sum;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));