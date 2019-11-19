let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

let vowelRegex = /b[aeiou]g/;

let result = quoteSample.match(vowelRegex);

console.log(result);