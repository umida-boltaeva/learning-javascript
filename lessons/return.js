// function noReturn(param) {
//     console.log(param);
// }

// var returnedValue = noReturn(3);
// console.log(returnedValue);

function returnsValue(param) {
    return param + 1;
}

function duplicate(param) {
    return 2 * param;
}

// var returnedValue2 = returnsValue(3);
// console.log("returnedValue2 = " + returnedValue2);

console.log(duplicate(returnsValue(3)));