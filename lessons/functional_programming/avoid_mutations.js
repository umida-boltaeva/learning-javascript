var fixedValue = 4;

function incrementer() {
    var newValue = fixedValue + 1;
    return newValue;
}

var newValue = incrementer();
console.log(fixedValue);