let quoteSample = "3 blind mice.";

let myRegex = /[^3ie]/gi;

let result = quoteSample.match(myRegex);

console.log(result);