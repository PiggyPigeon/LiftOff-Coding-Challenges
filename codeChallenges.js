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