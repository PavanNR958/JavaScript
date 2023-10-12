// 1.	Multiply
function multiply(a, b) {
    return (a * b);
}

// 2.	Get planet by Id
function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
    }
}

// 3.	Reversed Strings
function solution(str) {
    const arr = str.aplit("");
    const reversed = arr.reverse();
    const finalAnswer = reversed.join("")
    return finalAnswer;
}

(or)

function solution(str) {
    return str.split("").reverse().join("")
}

// 4.	Even or odd
function even_or_odd(num) {
    if (num % 2 == 0) {
        return 'Even';
    }
    else {
        return 'odd';
    }
}

// 5. Count sheep
function sheepCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count+=1;
        }
    }
    return count;
}

// 6. Vowel count
function getCount(str) {
    let vowelsCount = 0;
    constarr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
        }
    }
}

(or)

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(letter => {
        return vowels.includes(letter) ? true : false;
    }).length;
}

// 7. Jenny's secret message
function greet(name) {
    if (name === 'Johnny') {
        return "Hello, my love!";
    }
    return "hello, " + name + "!";
}

// 8. Is n divisible by x and y
function isDivisible(n, x, y) {
    const result1 = n / x;
    const result2 = n / y;
    if (result1 % 1 === 0 && result2 % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// 9. Return Negative
function makeNegative(num) {
    if (num < 0) {
        return num;
    }
    else {
        return num * -1;
    }
}

// 10. Find the smallest integer
class SmllestIntegerFinder {
    findSmallestInt(arr) {
        let smallNumber;
        for (let i = 0; i < arr.length; i++) {
            const arrNum = arr[i];
            if (i === 0) {
                smallNumber = arr[i];
            }
            if (arrNum < smallNumber) {
                smallNumber = arrNum;
            }
        }
        return smallNumber;
    }
}

// 11. Grasshopper - summation
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// 12. Get the mean of an array
function getAverage(arr) {
    const count = arr.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + arr[i];
    }
    const avg = sum / count;
    const roundedScore = Math.floor(avg);
    return roundedScore;
}

// 13. Rock paper Scissor
const rps = (player1, player2) => {
    if (player1 === 'rock') {
        if (player2 === 'rock') {
            return 'Draw!';
        }
        if (player2 === 'paper') {
            return 'Player 2 won!';
        }
        if (player2 === 'scissor') {
            return 'Player 1 won!';
        }
    }
    if (player1 === 'paper') {
        if (player2 === 'rock') {
            return 'Player 1 won!';
        }
        if (player2 === 'paper') {
            return 'Draw!';
        }
        if (player2 === 'scissor') {
            return 'Player 2 won!';
        }
    }
    if (player1 === 'scissor') {
        if (player2 === 'rock') {
            return 'Player 2 won!';
        }
        if (player2 === 'paper') {
            return 'Player 1 won!';
        }
        if (player2 === 'scissor') {
            return 'Draw!';
        }
    }
}

// 14. Remove Characters
function removeChar(str) {
    const lengthOfStr = str.length;
    return str.substr(1, lengthOfStr - 2);
}

// 15. Sum of Positive
function popsitiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

// 16. Basic Mathematical Operation
function basicOp(operation, value1, value2) {
    let result;
    switch (operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
    }
    return result;
}

(or)

function basicOp(operation, value1, value2) {
    const operationStr = value1 + operation + value2;
    const result = eval(operationStr);
    return result;
}

// 17. String Repeat
function repeatStr(n, s) {
    let starterStr = '';
    for (let i = 0; i < n; i++) {
        starterStr = starterStr + str;
    }
    return starterStr;
}

(or)

function repeatStr(n, s) {
    return s.repeat(n);
}

// 18. Convert string to an array
function stringToArray(string) {
    return string.split(" ")
}

// 19. Remove string spaces
function noSpace(x) {
    const arr = str.split(" ");
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const trimmedString = arr[i].trim();
        newArray.push(trimmedString);
    }
    const newString = newArray.join("");
    return newString;
}

// 20. Beginner-lost without a map
function maps(arr) {
    const result = arr.map((arrItem) => {
        return arrItem * 2;
    });
    return result;
}

// 21. Is he gonna survive
function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}

// 22. Array plus array
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i];
        const arr2Value = arr2[i];
        const addedValue = arr1Value + arr2Value;
        sum = sum + addedValue;
    }
    return sum;
}

// 23. Century from year
function century(year) {
    return Math.ceil(year / 100);
}

// 24. Cat years and dog years
var humanCatYearsDogYears = function (humanYears) {
    let catsAge;
    let dogAge;
    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }
    if (humanYears === 2) {
        return [humanYears, 24, 24];
    }
    const excessYears = humanYears - 2;
    const catYears = excessYears * 4;
    const dogYears = excessYears * 5;
    return [humanYears, 24 + catYears, 24 + dogYears];
}

// 25. Total of points
function points(gamesArray) {
    let totalPoints = 0;
    for (let i = o; i < gamesArray.length; i++) {
        const value = gamesArray[i];
        const parts = value.split(":");
        const x = parts[0];
        const y = parts[1];
        if (x > y) {
            totalPoints = totalPoints + 3;
        }
        else if (x === y) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}
