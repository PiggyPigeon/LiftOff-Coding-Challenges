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


// Code Challenge Six
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//
//     The wanted word is in lowercase.
//     The crowd of letters is all in uppercase.
//     Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
function detectWord(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result += str[i];
        }
    }
    return result;
}

console.log(detectWord('UGHcGFHaHJVBJHGtGJHGJ'))


// Code Challenge Seven
// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialised with
// the attributes name and age, return a sentence in the following format:
//
// {other person name} is {older than / younger than / the same age as} me.

//create the class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // create the function
    compareAge(person2) {
        if (this.age < person2) {
            return `${person2.name} is older than me`;
        } else if (this.age > person2.age) {
            return `${person2.name} is younger than me.`;
        } else {
            return `${person2.name} is the same age as me.`;
        }
    }
}

// test it
let p1 = new Person("Sam", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));



// Code Challenge Eight
//  Create a function that takes two strings as arguments and returns the number of
//  times the first string (the single character) is found in the second string.
//     Examples
// charCount("a", "edabit") ➞ 1
//
// charCount("c", "Chamber of secrets") ➞ 1
//
// charCount("b", "big fat bubble") ➞ 4

function charCount(str1, str2) {
    let total = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i].toLowerCase() == str1.toLowerCase()) {
            total += 1;
        }
    }
    return total;
}

console.log(charCount('a', 'edabit'))
console.log(charCount('c', 'Chamber of secrets'))
console.log(charCount('b', 'big fat bubble'))