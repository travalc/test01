//print every other
//generate new array numbers 1-255
//sum every number in array

function printEveryOther(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

printEveryOther([1,2,3,4,5,6]);

function generateArray1To255() {
    var finalArray = [];
    for (var i = 1; i <= 255; i++) {
        finalArray.push(i);
    }
    console.log(finalArray);
}

generateArray1To255();

function sumEveryNumberInArray (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

sumEveryNumberInArray([1,2,3,4]);   