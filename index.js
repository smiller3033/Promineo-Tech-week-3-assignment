//probelm 1: manipulate ages array
console.log("PROBLEM #1");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//subtract the element at the last index by the first index
let difference = ages[ages.length - 1] - ages[0];
console.log("Difference: " + difference);
//append new age to array to test the dynamic behavoir of the above code
ages.push(30);
difference = ages[ages.length - 1] - ages[0];
console.log("Dynamic test of difference: " + difference);
//calculate average age
let runningTotal = 0;
for(let i = 0; i < ages.length; i++) {
    runningTotal += ages[i];
}
let avg = runningTotal/ages.length;
console.log("Average age: " + avg);

//problem 2: manipulate names array
console.log("PROBLEM #2");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//calculate the average legnth of each name
runningTotal = 0;
for (let i = 0; i < names.length; i++) {
    runningTotal += names[i].length;
}
avg = runningTotal/names.length;
console.log("Average length of names: " + avg);
//concatenate all names separated by spaces
let namesString = "";
for (let i = 0; i < names.length; i++) {
    namesString = namesString + names[i] + " ";
}
console.log("String of all names: " + namesString);

//Problem 3: access the last element of an array
console.log("PROBLEM #3");
lastElement = names[names.length - 1];
console.log(lastElement);

//Problem 4: access the first element of an array
console.log("PROBLEM #4");
firstElement = names[0];
console.log(firstElement);

//Problem 5: create an array with all the lengths of every name
console.log("PROBLEM #5");
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}
console.log("nameLengths array: " + nameLengths);

//Problem 6: Sum of nameLengths array
console.log("PROBLEM #6");
let total = 0;
for (let i = 0; i < nameLengths.length; i++) {
    total += nameLengths[i];
}
console.log("nameLengths sum: " + total);

//Problem 7: word concatentation function
console.log("PROBLEM #7");
function wordConcat(word, n) {
    let wordConcat = "";
    for (let i = 0; i < n; i++) {
        wordConcat += word
    }
    return wordConcat;
}
console.log(wordConcat("Hello", 2));

//Problem 8: Full name function
console.log("PROBLEM #8");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let firstName = "Stephen";
let lastName = "Miller";
console.log(fullName(firstName, lastName));

//Problem 9: return true of the total sum of the array is greater than 100
let numArray1 = [50, 70, 10];
let numArray2 = [5, 7, 1];
console.log("PROBLEM #9");
function trueArraySum(numArray) {
    let runningTotal = 0;
    for(let i = 0; i < numArray.length; i++){
        runningTotal += numArray[i];
    }

    return runningTotal > 100;

}
console.log(trueArraySum(numArray1));

//Problem 10: average function
console.log("PROBLEM #10");
function avgNum(numArray) {
    let runningTotal = 0;
    for(let i = 0; i < numArray.length; i++){
        runningTotal += numArray[i];
    }

    return runningTotal/numArray.length;
}
console.log(avgNum(numArray1));

//Problem 11: average comparison
console.log("PROBLEM #11");
function avgNumComparison(numArray1, numArray2) {
    let runningTotal = 0;
    for(let i = 0; i < numArray1.length; i++){
        runningTotal += numArray1[i]; 6
    }
    let numArrayAvg1 = runningTotal/numArray1.length;

    runningTotal = 0;
    for(let i = 0; i < numArray2.length; i++){
        runningTotal += numArray2[i];
    }
    let numArrayAvg2 = runningTotal/numArray2.length;

    return numArrayAvg1 > numArrayAvg2;
}
console.log(avgNumComparison(numArray1, numArray2));

//Problem 12: willBuyDrink function
console.log("PROBLEM #12");
let isHotOutside = true;
let moneyInPocket = 11;
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Problem 13: Custom Function
//recursive function that solves a factorial for only integers
//I am a math nerd and wanted to create a function that solves a math operation
console.log("PROBLEM #13");
function factorial(num) {
    if (num == 1) {
        return 1
    }
    else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(5));